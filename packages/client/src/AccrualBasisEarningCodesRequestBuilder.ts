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
import { AccrualBasisEarningCodes } from './AccrualBasisEarningCodes';

/**
 * Request builder class for operations supported on the {@link AccrualBasisEarningCodes} entity.
 */
export class AccrualBasisEarningCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AccrualBasisEarningCodes<T>, T> {
  /**
   * Returns a request builder for querying all `AccrualBasisEarningCodes` entities.
   * @returns A request builder for creating requests to retrieve all `AccrualBasisEarningCodes` entities.
   */
  getAll(): GetAllRequestBuilder<AccrualBasisEarningCodes<T>, T> {
    return new GetAllRequestBuilder<AccrualBasisEarningCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AccrualBasisEarningCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccrualBasisEarningCodes`.
   */
  create(
    entity: AccrualBasisEarningCodes<T>
  ): CreateRequestBuilder<AccrualBasisEarningCodes<T>, T> {
    return new CreateRequestBuilder<AccrualBasisEarningCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AccrualBasisEarningCodes` entity based on its keys.
   * @param accrualId Key property. See {@link AccrualBasisEarningCodes.accrualId}.
   * @param earningCodeId Key property. See {@link AccrualBasisEarningCodes.earningCodeId}.
   * @param earningCodeGroupId Key property. See {@link AccrualBasisEarningCodes.earningCodeGroupId}.
   * @returns A request builder for creating requests to retrieve one `AccrualBasisEarningCodes` entity based on its keys.
   */
  getByKey(
    accrualId: DeserializedType<T, 'Edm.String'>,
    earningCodeId: DeserializedType<T, 'Edm.String'>,
    earningCodeGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AccrualBasisEarningCodes<T>, T> {
    return new GetByKeyRequestBuilder<AccrualBasisEarningCodes<T>, T>(
      this.entityApi,
      {
        AccrualId: accrualId,
        EarningCodeId: earningCodeId,
        EarningCodeGroupId: earningCodeGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AccrualBasisEarningCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccrualBasisEarningCodes`.
   */
  update(
    entity: AccrualBasisEarningCodes<T>
  ): UpdateRequestBuilder<AccrualBasisEarningCodes<T>, T> {
    return new UpdateRequestBuilder<AccrualBasisEarningCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AccrualBasisEarningCodes`.
   * @param accrualId Key property. See {@link AccrualBasisEarningCodes.accrualId}.
   * @param earningCodeId Key property. See {@link AccrualBasisEarningCodes.earningCodeId}.
   * @param earningCodeGroupId Key property. See {@link AccrualBasisEarningCodes.earningCodeGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `AccrualBasisEarningCodes`.
   */
  delete(
    accrualId: string,
    earningCodeId: string,
    earningCodeGroupId: string
  ): DeleteRequestBuilder<AccrualBasisEarningCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccrualBasisEarningCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccrualBasisEarningCodes` by taking the entity as a parameter.
   */
  delete(
    entity: AccrualBasisEarningCodes<T>
  ): DeleteRequestBuilder<AccrualBasisEarningCodes<T>, T>;
  delete(
    accrualIdOrEntity: any,
    earningCodeId?: string,
    earningCodeGroupId?: string
  ): DeleteRequestBuilder<AccrualBasisEarningCodes<T>, T> {
    return new DeleteRequestBuilder<AccrualBasisEarningCodes<T>, T>(
      this.entityApi,
      accrualIdOrEntity instanceof AccrualBasisEarningCodes
        ? accrualIdOrEntity
        : {
            AccrualId: accrualIdOrEntity!,
            EarningCodeId: earningCodeId!,
            EarningCodeGroupId: earningCodeGroupId!
          }
    );
  }
}
