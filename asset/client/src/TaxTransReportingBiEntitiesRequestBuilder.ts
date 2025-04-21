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
import { TaxTransReportingBiEntities } from './TaxTransReportingBiEntities';

/**
 * Request builder class for operations supported on the {@link TaxTransReportingBiEntities} entity.
 */
export class TaxTransReportingBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxTransReportingBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TaxTransReportingBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TaxTransReportingBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TaxTransReportingBiEntities<T>, T> {
    return new GetAllRequestBuilder<TaxTransReportingBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TaxTransReportingBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxTransReportingBiEntities`.
   */
  create(
    entity: TaxTransReportingBiEntities<T>
  ): CreateRequestBuilder<TaxTransReportingBiEntities<T>, T> {
    return new CreateRequestBuilder<TaxTransReportingBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxTransReportingBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxTransReportingBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransReportingBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `TaxTransReportingBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TaxTransReportingBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<TaxTransReportingBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxTransReportingBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxTransReportingBiEntities`.
   */
  update(
    entity: TaxTransReportingBiEntities<T>
  ): UpdateRequestBuilder<TaxTransReportingBiEntities<T>, T> {
    return new UpdateRequestBuilder<TaxTransReportingBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxTransReportingBiEntities`.
   * @param dataAreaId Key property. See {@link TaxTransReportingBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransReportingBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransReportingBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<TaxTransReportingBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxTransReportingBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransReportingBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TaxTransReportingBiEntities<T>
  ): DeleteRequestBuilder<TaxTransReportingBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<TaxTransReportingBiEntities<T>, T> {
    return new DeleteRequestBuilder<TaxTransReportingBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxTransReportingBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
