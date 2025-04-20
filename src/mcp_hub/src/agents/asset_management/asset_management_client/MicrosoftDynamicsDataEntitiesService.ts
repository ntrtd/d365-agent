// @ts-nocheck
import type { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  ODataService,
  EntityTypeServiceV4,
  ODataServiceOptionsInternal,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import type {
  AssetMaintenanceWorkOrderScheduleParametersId,
  AssetMaintenanceUnplannedWorkOrderLinesId,
  AssetMaintenanceParametersId,
  AssetMaintenanceWorkOrderScheduleParameters,
  EditableAssetMaintenanceWorkOrderScheduleParameters,
  AssetMaintenanceUnplannedWorkOrderLines,
  EditableAssetMaintenanceUnplannedWorkOrderLines,
  AssetMaintenanceParameters,
  EditableAssetMaintenanceParameters,
} from "./MicrosoftDynamicsDataEntitiesModel";
import type {
  QAssetMaintenanceWorkOrderScheduleParameters,
  QAssetMaintenanceUnplannedWorkOrderLines,
  QAssetMaintenanceParameters,
} from "./QMicrosoftDynamicsDataEntities";
import {
  QAssetMaintenanceWorkOrderScheduleParametersId,
  QAssetMaintenanceUnplannedWorkOrderLinesId,
  QAssetMaintenanceParametersId,
  qAssetMaintenanceWorkOrderScheduleParameters,
  qAssetMaintenanceUnplannedWorkOrderLines,
  qAssetMaintenanceParameters,
} from "./QMicrosoftDynamicsDataEntities";

export class MicrosoftDynamicsDataEntitiesService<
  in out ClientType extends ODataHttpClient,
> extends ODataService<ClientType> {
  public assetMaintenanceWorkOrderScheduleParameters(): AssetMaintenanceWorkOrderScheduleParametersCollectionService<ClientType>;
  public assetMaintenanceWorkOrderScheduleParameters(
    id: AssetMaintenanceWorkOrderScheduleParametersId,
  ): AssetMaintenanceWorkOrderScheduleParametersService<ClientType>;
  public assetMaintenanceWorkOrderScheduleParameters(
    id?: AssetMaintenanceWorkOrderScheduleParametersId | undefined,
  ) {
    const fieldName = "AssetMaintenanceWorkOrderScheduleParameters";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AssetMaintenanceWorkOrderScheduleParametersCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new AssetMaintenanceWorkOrderScheduleParametersService(
          client,
          path,
          new QAssetMaintenanceWorkOrderScheduleParametersId(
            fieldName,
          ).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public assetMaintenanceUnplannedWorkOrderLines(): AssetMaintenanceUnplannedWorkOrderLinesCollectionService<ClientType>;
  public assetMaintenanceUnplannedWorkOrderLines(
    id: AssetMaintenanceUnplannedWorkOrderLinesId,
  ): AssetMaintenanceUnplannedWorkOrderLinesService<ClientType>;
  public assetMaintenanceUnplannedWorkOrderLines(
    id?: AssetMaintenanceUnplannedWorkOrderLinesId | undefined,
  ) {
    const fieldName = "AssetMaintenanceUnplannedWorkOrderLines";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AssetMaintenanceUnplannedWorkOrderLinesCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new AssetMaintenanceUnplannedWorkOrderLinesService(
          client,
          path,
          new QAssetMaintenanceUnplannedWorkOrderLinesId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public assetMaintenanceParameters(): AssetMaintenanceParametersCollectionService<ClientType>;
  public assetMaintenanceParameters(
    id: AssetMaintenanceParametersId,
  ): AssetMaintenanceParametersService<ClientType>;
  public assetMaintenanceParameters(
    id?: AssetMaintenanceParametersId | undefined,
  ) {
    const fieldName = "AssetMaintenanceParameters";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AssetMaintenanceParametersCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new AssetMaintenanceParametersService(
          client,
          path,
          new QAssetMaintenanceParametersId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }
}

export class AssetMaintenanceWorkOrderScheduleParametersService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  AssetMaintenanceWorkOrderScheduleParameters,
  EditableAssetMaintenanceWorkOrderScheduleParameters,
  QAssetMaintenanceWorkOrderScheduleParameters
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qAssetMaintenanceWorkOrderScheduleParameters,
      options,
    );
  }
}

export class AssetMaintenanceWorkOrderScheduleParametersCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  AssetMaintenanceWorkOrderScheduleParameters,
  EditableAssetMaintenanceWorkOrderScheduleParameters,
  QAssetMaintenanceWorkOrderScheduleParameters,
  AssetMaintenanceWorkOrderScheduleParametersId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qAssetMaintenanceWorkOrderScheduleParameters,
      new QAssetMaintenanceWorkOrderScheduleParametersId(name),
      options,
    );
  }
}

export class AssetMaintenanceUnplannedWorkOrderLinesService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  AssetMaintenanceUnplannedWorkOrderLines,
  EditableAssetMaintenanceUnplannedWorkOrderLines,
  QAssetMaintenanceUnplannedWorkOrderLines
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qAssetMaintenanceUnplannedWorkOrderLines,
      options,
    );
  }
}

export class AssetMaintenanceUnplannedWorkOrderLinesCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  AssetMaintenanceUnplannedWorkOrderLines,
  EditableAssetMaintenanceUnplannedWorkOrderLines,
  QAssetMaintenanceUnplannedWorkOrderLines,
  AssetMaintenanceUnplannedWorkOrderLinesId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qAssetMaintenanceUnplannedWorkOrderLines,
      new QAssetMaintenanceUnplannedWorkOrderLinesId(name),
      options,
    );
  }
}

export class AssetMaintenanceParametersService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  AssetMaintenanceParameters,
  EditableAssetMaintenanceParameters,
  QAssetMaintenanceParameters
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qAssetMaintenanceParameters, options);
  }
}

export class AssetMaintenanceParametersCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  AssetMaintenanceParameters,
  EditableAssetMaintenanceParameters,
  QAssetMaintenanceParameters,
  AssetMaintenanceParametersId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qAssetMaintenanceParameters,
      new QAssetMaintenanceParametersId(name),
      options,
    );
  }
}
