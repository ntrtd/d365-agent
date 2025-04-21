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
import { GupFundTables } from './GupFundTables';

/**
 * Request builder class for operations supported on the {@link GupFundTables} entity.
 */
export class GupFundTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GupFundTables<T>, T> {
  /**
   * Returns a request builder for querying all `GupFundTables` entities.
   * @returns A request builder for creating requests to retrieve all `GupFundTables` entities.
   */
  getAll(): GetAllRequestBuilder<GupFundTables<T>, T> {
    return new GetAllRequestBuilder<GupFundTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GupFundTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GupFundTables`.
   */
  create(entity: GupFundTables<T>): CreateRequestBuilder<GupFundTables<T>, T> {
    return new CreateRequestBuilder<GupFundTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GupFundTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link GupFundTables.dataAreaId}.
   * @param fundId Key property. See {@link GupFundTables.fundId}.
   * @returns A request builder for creating requests to retrieve one `GupFundTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fundId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GupFundTables<T>, T> {
    return new GetByKeyRequestBuilder<GupFundTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FundID: fundId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `GupFundTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GupFundTables`.
   */
  update(entity: GupFundTables<T>): UpdateRequestBuilder<GupFundTables<T>, T> {
    return new UpdateRequestBuilder<GupFundTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GupFundTables`.
   * @param dataAreaId Key property. See {@link GupFundTables.dataAreaId}.
   * @param fundId Key property. See {@link GupFundTables.fundId}.
   * @returns A request builder for creating requests that delete an entity of type `GupFundTables`.
   */
  delete(
    dataAreaId: string,
    fundId: string
  ): DeleteRequestBuilder<GupFundTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GupFundTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GupFundTables` by taking the entity as a parameter.
   */
  delete(entity: GupFundTables<T>): DeleteRequestBuilder<GupFundTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fundId?: string
  ): DeleteRequestBuilder<GupFundTables<T>, T> {
    return new DeleteRequestBuilder<GupFundTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof GupFundTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FundID: fundId!
          }
    );
  }
}
