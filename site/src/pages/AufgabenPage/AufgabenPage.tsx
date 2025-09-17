import type { FC } from "react";

const AufgabenPage: FC = () => {
    return (
        <div
            css={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                css={(theme) => ({
                    margin: 8,
                    padding: 8,
                    borderRight: theme.palette.divider,
                })}
            >
                <h4>Aufgaben page</h4>
            </div>

        </div>
    );
};

export default AufgabenPage;
