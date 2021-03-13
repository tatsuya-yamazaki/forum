import { createContext, useState, ReactNode } from 'react';

type TotalContext = {
	user: string | null;
	setUser( user: string | null ):void;
	session: string | null;
	setSession( session: string | null ):void;
}

const defaultContext:TotalContext = {
	user : null,
	setUser( user: string | null ) {},
	session: null,
	setSession( session: string | null ) {}
}
	
export const totalContext = createContext<TotalContext>(defaultContext);

interface TotalProviderProps {
	children: ReactNode
}

export function TotalProvider (props: TotalProviderProps) {
	const [ user, setUser ] = useState<string | null>(null);
	const [ session, setSession ] = useState<string | null>(null);

	return (
		<totalContext.Provider value={{ user, setUser, session, setSession }} >
			{props.children}
		</totalContext.Provider>
	);
}

