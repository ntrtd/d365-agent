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
import { RetailKitComponentSubstitutes } from './RetailKitComponentSubstitutes';

/**
 * Request builder class for operations supported on the {@link RetailKitComponentSubstitutes} entity.
 */
export class RetailKitComponentSubstitutesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailKitComponentSubstitutes<T>, T> {
  /**
   * Returns a request builder for querying all `RetailKitComponentSubstitutes` entities.
   * @returns A request builder for creating requests to retrieve all `RetailKitComponentSubstitutes` entities.
   */
  getAll(): GetAllRequestBuilder<RetailKitComponentSubstitutes<T>, T> {
    return new GetAllRequestBuilder<RetailKitComponentSubstitutes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailKitComponentSubstitutes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailKitComponentSubstitutes`.
   */
  create(
    entity: RetailKitComponentSubstitutes<T>
  ): CreateRequestBuilder<RetailKitComponentSubstitutes<T>, T> {
    return new CreateRequestBuilder<RetailKitComponentSubstitutes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailKitComponentSubstitutes` entity based on its keys.
   * @param kitProductNumber Key property. See {@link RetailKitComponentSubstitutes.kitProductNumber}.
   * @param kitComponentLineNumber Key property. See {@link RetailKitComponentSubstitutes.kitComponentLineNumber}.
   * @param substituteProductNumber Key property. See {@link RetailKitComponentSubstitutes.substituteProductNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailKitComponentSubstitutes` entity based on its keys.
   */
  getByKey(
    kitProductNumber: DeserializedType<T, 'Edm.String'>,
    kitComponentLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    substituteProductNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailKitComponentSubstitutes<T>, T> {
    return new GetByKeyRequestBuilder<RetailKitComponentSubstitutes<T>, T>(
      this.entityApi,
      {
        KitProductNumber: kitProductNumber,
        KitComponentLineNumber: kitComponentLineNumber,
        SubstituteProductNumber: substituteProductNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailKitComponentSubstitutes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailKitComponentSubstitutes`.
   */
  update(
    entity: RetailKitComponentSubstitutes<T>
  ): UpdateRequestBuilder<RetailKitComponentSubstitutes<T>, T> {
    return new UpdateRequestBuilder<RetailKitComponentSubstitutes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailKitComponentSubstitutes`.
   * @param kitProductNumber Key property. See {@link RetailKitComponentSubstitutes.kitProductNumber}.
   * @param kitComponentLineNumber Key property. See {@link RetailKitComponentSubstitutes.kitComponentLineNumber}.
   * @param substituteProductNumber Key property. See {@link RetailKitComponentSubstitutes.substituteProductNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailKitComponentSubstitutes`.
   */
  delete(
    kitProductNumber: string,
    kitComponentLineNumber: BigNumber,
    substituteProductNumber: string
  ): DeleteRequestBuilder<RetailKitComponentSubstitutes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailKitComponentSubstitutes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailKitComponentSubstitutes` by taking the entity as a parameter.
   */
  delete(
    entity: RetailKitComponentSubstitutes<T>
  ): DeleteRequestBuilder<RetailKitComponentSubstitutes<T>, T>;
  delete(
    kitProductNumberOrEntity: any,
    kitComponentLineNumber?: BigNumber,
    substituteProductNumber?: string
  ): DeleteRequestBuilder<RetailKitComponentSubstitutes<T>, T> {
    return new DeleteRequestBuilder<RetailKitComponentSubstitutes<T>, T>(
      this.entityApi,
      kitProductNumberOrEntity instanceof RetailKitComponentSubstitutes
        ? kitProductNumberOrEntity
        : {
            KitProductNumber: kitProductNumberOrEntity!,
            KitComponentLineNumber: kitComponentLineNumber!,
            SubstituteProductNumber: substituteProductNumber!
          }
    );
  }
}
