/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { CustBillOfExchangeTransBiEntities } from './CustBillOfExchangeTransBiEntities';

/**
 * Request builder class for operations supported on the {@link CustBillOfExchangeTransBiEntities} entity.
 */
export class CustBillOfExchangeTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustBillOfExchangeTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `CustBillOfExchangeTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `CustBillOfExchangeTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<CustBillOfExchangeTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<CustBillOfExchangeTransBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustBillOfExchangeTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustBillOfExchangeTransBiEntities`.
   */
  create(
    entity: CustBillOfExchangeTransBiEntities<T>
  ): CreateRequestBuilder<CustBillOfExchangeTransBiEntities<T>, T> {
    return new CreateRequestBuilder<CustBillOfExchangeTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustBillOfExchangeTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustBillOfExchangeTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link CustBillOfExchangeTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `CustBillOfExchangeTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<CustBillOfExchangeTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<CustBillOfExchangeTransBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustBillOfExchangeTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustBillOfExchangeTransBiEntities`.
   */
  update(
    entity: CustBillOfExchangeTransBiEntities<T>
  ): UpdateRequestBuilder<CustBillOfExchangeTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<CustBillOfExchangeTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustBillOfExchangeTransBiEntities`.
   * @param dataAreaId Key property. See {@link CustBillOfExchangeTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link CustBillOfExchangeTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `CustBillOfExchangeTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<CustBillOfExchangeTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustBillOfExchangeTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustBillOfExchangeTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: CustBillOfExchangeTransBiEntities<T>
  ): DeleteRequestBuilder<CustBillOfExchangeTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<CustBillOfExchangeTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<CustBillOfExchangeTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustBillOfExchangeTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
