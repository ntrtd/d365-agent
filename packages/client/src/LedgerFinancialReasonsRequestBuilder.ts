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
import { LedgerFinancialReasons } from './LedgerFinancialReasons';

/**
 * Request builder class for operations supported on the {@link LedgerFinancialReasons} entity.
 */
export class LedgerFinancialReasonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerFinancialReasons<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerFinancialReasons` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerFinancialReasons` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerFinancialReasons<T>, T> {
    return new GetAllRequestBuilder<LedgerFinancialReasons<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerFinancialReasons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerFinancialReasons`.
   */
  create(
    entity: LedgerFinancialReasons<T>
  ): CreateRequestBuilder<LedgerFinancialReasons<T>, T> {
    return new CreateRequestBuilder<LedgerFinancialReasons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerFinancialReasons` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerFinancialReasons.dataAreaId}.
   * @param reasonCode Key property. See {@link LedgerFinancialReasons.reasonCode}.
   * @returns A request builder for creating requests to retrieve one `LedgerFinancialReasons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reasonCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerFinancialReasons<T>, T> {
    return new GetByKeyRequestBuilder<LedgerFinancialReasons<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReasonCode: reasonCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerFinancialReasons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerFinancialReasons`.
   */
  update(
    entity: LedgerFinancialReasons<T>
  ): UpdateRequestBuilder<LedgerFinancialReasons<T>, T> {
    return new UpdateRequestBuilder<LedgerFinancialReasons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerFinancialReasons`.
   * @param dataAreaId Key property. See {@link LedgerFinancialReasons.dataAreaId}.
   * @param reasonCode Key property. See {@link LedgerFinancialReasons.reasonCode}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerFinancialReasons`.
   */
  delete(
    dataAreaId: string,
    reasonCode: string
  ): DeleteRequestBuilder<LedgerFinancialReasons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerFinancialReasons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerFinancialReasons` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerFinancialReasons<T>
  ): DeleteRequestBuilder<LedgerFinancialReasons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reasonCode?: string
  ): DeleteRequestBuilder<LedgerFinancialReasons<T>, T> {
    return new DeleteRequestBuilder<LedgerFinancialReasons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerFinancialReasons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReasonCode: reasonCode!
          }
    );
  }
}
