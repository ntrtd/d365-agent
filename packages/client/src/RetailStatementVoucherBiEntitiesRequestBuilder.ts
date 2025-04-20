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
import { RetailStatementVoucherBiEntities } from './RetailStatementVoucherBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailStatementVoucherBiEntities} entity.
 */
export class RetailStatementVoucherBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStatementVoucherBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStatementVoucherBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStatementVoucherBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStatementVoucherBiEntities<T>, T> {
    return new GetAllRequestBuilder<RetailStatementVoucherBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailStatementVoucherBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStatementVoucherBiEntities`.
   */
  create(
    entity: RetailStatementVoucherBiEntities<T>
  ): CreateRequestBuilder<RetailStatementVoucherBiEntities<T>, T> {
    return new CreateRequestBuilder<RetailStatementVoucherBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailStatementVoucherBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailStatementVoucherBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link RetailStatementVoucherBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `RetailStatementVoucherBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<RetailStatementVoucherBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<RetailStatementVoucherBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStatementVoucherBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStatementVoucherBiEntities`.
   */
  update(
    entity: RetailStatementVoucherBiEntities<T>
  ): UpdateRequestBuilder<RetailStatementVoucherBiEntities<T>, T> {
    return new UpdateRequestBuilder<RetailStatementVoucherBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStatementVoucherBiEntities`.
   * @param dataAreaId Key property. See {@link RetailStatementVoucherBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link RetailStatementVoucherBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStatementVoucherBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<RetailStatementVoucherBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStatementVoucherBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStatementVoucherBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailStatementVoucherBiEntities<T>
  ): DeleteRequestBuilder<RetailStatementVoucherBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<RetailStatementVoucherBiEntities<T>, T> {
    return new DeleteRequestBuilder<RetailStatementVoucherBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailStatementVoucherBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
