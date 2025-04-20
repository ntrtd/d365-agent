/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { RAssetSayTables } from './RAssetSayTables';

/**
 * Request builder class for operations supported on the {@link RAssetSayTables} entity.
 */
export class RAssetSayTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetSayTables<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetSayTables` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetSayTables` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetSayTables<T>, T> {
    return new GetAllRequestBuilder<RAssetSayTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RAssetSayTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetSayTables`.
   */
  create(
    entity: RAssetSayTables<T>
  ): CreateRequestBuilder<RAssetSayTables<T>, T> {
    return new CreateRequestBuilder<RAssetSayTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RAssetSayTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetSayTables.dataAreaId}.
   * @param analysisCode Key property. See {@link RAssetSayTables.analysisCode}.
   * @returns A request builder for creating requests to retrieve one `RAssetSayTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    analysisCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RAssetSayTables<T>, T> {
    return new GetByKeyRequestBuilder<RAssetSayTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AnalysisCode: analysisCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetSayTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetSayTables`.
   */
  update(
    entity: RAssetSayTables<T>
  ): UpdateRequestBuilder<RAssetSayTables<T>, T> {
    return new UpdateRequestBuilder<RAssetSayTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetSayTables`.
   * @param dataAreaId Key property. See {@link RAssetSayTables.dataAreaId}.
   * @param analysisCode Key property. See {@link RAssetSayTables.analysisCode}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetSayTables`.
   */
  delete(
    dataAreaId: string,
    analysisCode: string
  ): DeleteRequestBuilder<RAssetSayTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetSayTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetSayTables` by taking the entity as a parameter.
   */
  delete(
    entity: RAssetSayTables<T>
  ): DeleteRequestBuilder<RAssetSayTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    analysisCode?: string
  ): DeleteRequestBuilder<RAssetSayTables<T>, T> {
    return new DeleteRequestBuilder<RAssetSayTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetSayTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AnalysisCode: analysisCode!
          }
    );
  }
}
