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
import { RetailKitReleasedSubstitutes } from './RetailKitReleasedSubstitutes';

/**
 * Request builder class for operations supported on the {@link RetailKitReleasedSubstitutes} entity.
 */
export class RetailKitReleasedSubstitutesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailKitReleasedSubstitutes<T>, T> {
  /**
   * Returns a request builder for querying all `RetailKitReleasedSubstitutes` entities.
   * @returns A request builder for creating requests to retrieve all `RetailKitReleasedSubstitutes` entities.
   */
  getAll(): GetAllRequestBuilder<RetailKitReleasedSubstitutes<T>, T> {
    return new GetAllRequestBuilder<RetailKitReleasedSubstitutes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailKitReleasedSubstitutes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailKitReleasedSubstitutes`.
   */
  create(
    entity: RetailKitReleasedSubstitutes<T>
  ): CreateRequestBuilder<RetailKitReleasedSubstitutes<T>, T> {
    return new CreateRequestBuilder<RetailKitReleasedSubstitutes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailKitReleasedSubstitutes` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailKitReleasedSubstitutes.dataAreaId}.
   * @param kitProductNumber Key property. See {@link RetailKitReleasedSubstitutes.kitProductNumber}.
   * @param kitComponentLineNumber Key property. See {@link RetailKitReleasedSubstitutes.kitComponentLineNumber}.
   * @param substituteProductNumber Key property. See {@link RetailKitReleasedSubstitutes.substituteProductNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailKitReleasedSubstitutes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    kitProductNumber: DeserializedType<T, 'Edm.String'>,
    kitComponentLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    substituteProductNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailKitReleasedSubstitutes<T>, T> {
    return new GetByKeyRequestBuilder<RetailKitReleasedSubstitutes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        KitProductNumber: kitProductNumber,
        KitComponentLineNumber: kitComponentLineNumber,
        SubstituteProductNumber: substituteProductNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailKitReleasedSubstitutes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailKitReleasedSubstitutes`.
   */
  update(
    entity: RetailKitReleasedSubstitutes<T>
  ): UpdateRequestBuilder<RetailKitReleasedSubstitutes<T>, T> {
    return new UpdateRequestBuilder<RetailKitReleasedSubstitutes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailKitReleasedSubstitutes`.
   * @param dataAreaId Key property. See {@link RetailKitReleasedSubstitutes.dataAreaId}.
   * @param kitProductNumber Key property. See {@link RetailKitReleasedSubstitutes.kitProductNumber}.
   * @param kitComponentLineNumber Key property. See {@link RetailKitReleasedSubstitutes.kitComponentLineNumber}.
   * @param substituteProductNumber Key property. See {@link RetailKitReleasedSubstitutes.substituteProductNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailKitReleasedSubstitutes`.
   */
  delete(
    dataAreaId: string,
    kitProductNumber: string,
    kitComponentLineNumber: BigNumber,
    substituteProductNumber: string
  ): DeleteRequestBuilder<RetailKitReleasedSubstitutes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailKitReleasedSubstitutes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailKitReleasedSubstitutes` by taking the entity as a parameter.
   */
  delete(
    entity: RetailKitReleasedSubstitutes<T>
  ): DeleteRequestBuilder<RetailKitReleasedSubstitutes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    kitProductNumber?: string,
    kitComponentLineNumber?: BigNumber,
    substituteProductNumber?: string
  ): DeleteRequestBuilder<RetailKitReleasedSubstitutes<T>, T> {
    return new DeleteRequestBuilder<RetailKitReleasedSubstitutes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailKitReleasedSubstitutes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            KitProductNumber: kitProductNumber!,
            KitComponentLineNumber: kitComponentLineNumber!,
            SubstituteProductNumber: substituteProductNumber!
          }
    );
  }
}
