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
import { AccrualEarningCodes } from './AccrualEarningCodes';

/**
 * Request builder class for operations supported on the {@link AccrualEarningCodes} entity.
 */
export class AccrualEarningCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AccrualEarningCodes<T>, T> {
  /**
   * Returns a request builder for querying all `AccrualEarningCodes` entities.
   * @returns A request builder for creating requests to retrieve all `AccrualEarningCodes` entities.
   */
  getAll(): GetAllRequestBuilder<AccrualEarningCodes<T>, T> {
    return new GetAllRequestBuilder<AccrualEarningCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AccrualEarningCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccrualEarningCodes`.
   */
  create(
    entity: AccrualEarningCodes<T>
  ): CreateRequestBuilder<AccrualEarningCodes<T>, T> {
    return new CreateRequestBuilder<AccrualEarningCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AccrualEarningCodes` entity based on its keys.
   * @param accrualId Key property. See {@link AccrualEarningCodes.accrualId}.
   * @param earningCodeId Key property. See {@link AccrualEarningCodes.earningCodeId}.
   * @returns A request builder for creating requests to retrieve one `AccrualEarningCodes` entity based on its keys.
   */
  getByKey(
    accrualId: DeserializedType<T, 'Edm.String'>,
    earningCodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AccrualEarningCodes<T>, T> {
    return new GetByKeyRequestBuilder<AccrualEarningCodes<T>, T>(
      this.entityApi,
      {
        AccrualId: accrualId,
        EarningCodeId: earningCodeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AccrualEarningCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccrualEarningCodes`.
   */
  update(
    entity: AccrualEarningCodes<T>
  ): UpdateRequestBuilder<AccrualEarningCodes<T>, T> {
    return new UpdateRequestBuilder<AccrualEarningCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AccrualEarningCodes`.
   * @param accrualId Key property. See {@link AccrualEarningCodes.accrualId}.
   * @param earningCodeId Key property. See {@link AccrualEarningCodes.earningCodeId}.
   * @returns A request builder for creating requests that delete an entity of type `AccrualEarningCodes`.
   */
  delete(
    accrualId: string,
    earningCodeId: string
  ): DeleteRequestBuilder<AccrualEarningCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccrualEarningCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccrualEarningCodes` by taking the entity as a parameter.
   */
  delete(
    entity: AccrualEarningCodes<T>
  ): DeleteRequestBuilder<AccrualEarningCodes<T>, T>;
  delete(
    accrualIdOrEntity: any,
    earningCodeId?: string
  ): DeleteRequestBuilder<AccrualEarningCodes<T>, T> {
    return new DeleteRequestBuilder<AccrualEarningCodes<T>, T>(
      this.entityApi,
      accrualIdOrEntity instanceof AccrualEarningCodes
        ? accrualIdOrEntity
        : {
            AccrualId: accrualIdOrEntity!,
            EarningCodeId: earningCodeId!
          }
    );
  }
}
