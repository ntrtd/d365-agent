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
import { TaxPeriodHeads } from './TaxPeriodHeads';

/**
 * Request builder class for operations supported on the {@link TaxPeriodHeads} entity.
 */
export class TaxPeriodHeadsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxPeriodHeads<T>, T> {
  /**
   * Returns a request builder for querying all `TaxPeriodHeads` entities.
   * @returns A request builder for creating requests to retrieve all `TaxPeriodHeads` entities.
   */
  getAll(): GetAllRequestBuilder<TaxPeriodHeads<T>, T> {
    return new GetAllRequestBuilder<TaxPeriodHeads<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxPeriodHeads` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxPeriodHeads`.
   */
  create(
    entity: TaxPeriodHeads<T>
  ): CreateRequestBuilder<TaxPeriodHeads<T>, T> {
    return new CreateRequestBuilder<TaxPeriodHeads<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxPeriodHeads` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxPeriodHeads.dataAreaId}.
   * @param taxPeriodId Key property. See {@link TaxPeriodHeads.taxPeriodId}.
   * @returns A request builder for creating requests to retrieve one `TaxPeriodHeads` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxPeriodId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxPeriodHeads<T>, T> {
    return new GetByKeyRequestBuilder<TaxPeriodHeads<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TaxPeriodId: taxPeriodId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxPeriodHeads`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxPeriodHeads`.
   */
  update(
    entity: TaxPeriodHeads<T>
  ): UpdateRequestBuilder<TaxPeriodHeads<T>, T> {
    return new UpdateRequestBuilder<TaxPeriodHeads<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxPeriodHeads`.
   * @param dataAreaId Key property. See {@link TaxPeriodHeads.dataAreaId}.
   * @param taxPeriodId Key property. See {@link TaxPeriodHeads.taxPeriodId}.
   * @returns A request builder for creating requests that delete an entity of type `TaxPeriodHeads`.
   */
  delete(
    dataAreaId: string,
    taxPeriodId: string
  ): DeleteRequestBuilder<TaxPeriodHeads<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxPeriodHeads`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxPeriodHeads` by taking the entity as a parameter.
   */
  delete(entity: TaxPeriodHeads<T>): DeleteRequestBuilder<TaxPeriodHeads<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxPeriodId?: string
  ): DeleteRequestBuilder<TaxPeriodHeads<T>, T> {
    return new DeleteRequestBuilder<TaxPeriodHeads<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxPeriodHeads
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxPeriodId: taxPeriodId!
          }
    );
  }
}
