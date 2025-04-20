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
import { RetailKitComponents } from './RetailKitComponents';

/**
 * Request builder class for operations supported on the {@link RetailKitComponents} entity.
 */
export class RetailKitComponentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailKitComponents<T>, T> {
  /**
   * Returns a request builder for querying all `RetailKitComponents` entities.
   * @returns A request builder for creating requests to retrieve all `RetailKitComponents` entities.
   */
  getAll(): GetAllRequestBuilder<RetailKitComponents<T>, T> {
    return new GetAllRequestBuilder<RetailKitComponents<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailKitComponents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailKitComponents`.
   */
  create(
    entity: RetailKitComponents<T>
  ): CreateRequestBuilder<RetailKitComponents<T>, T> {
    return new CreateRequestBuilder<RetailKitComponents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailKitComponents` entity based on its keys.
   * @param kitProductNumber Key property. See {@link RetailKitComponents.kitProductNumber}.
   * @param lineNumber Key property. See {@link RetailKitComponents.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailKitComponents` entity based on its keys.
   */
  getByKey(
    kitProductNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailKitComponents<T>, T> {
    return new GetByKeyRequestBuilder<RetailKitComponents<T>, T>(
      this.entityApi,
      {
        KitProductNumber: kitProductNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailKitComponents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailKitComponents`.
   */
  update(
    entity: RetailKitComponents<T>
  ): UpdateRequestBuilder<RetailKitComponents<T>, T> {
    return new UpdateRequestBuilder<RetailKitComponents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailKitComponents`.
   * @param kitProductNumber Key property. See {@link RetailKitComponents.kitProductNumber}.
   * @param lineNumber Key property. See {@link RetailKitComponents.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailKitComponents`.
   */
  delete(
    kitProductNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailKitComponents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailKitComponents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailKitComponents` by taking the entity as a parameter.
   */
  delete(
    entity: RetailKitComponents<T>
  ): DeleteRequestBuilder<RetailKitComponents<T>, T>;
  delete(
    kitProductNumberOrEntity: any,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailKitComponents<T>, T> {
    return new DeleteRequestBuilder<RetailKitComponents<T>, T>(
      this.entityApi,
      kitProductNumberOrEntity instanceof RetailKitComponents
        ? kitProductNumberOrEntity
        : {
            KitProductNumber: kitProductNumberOrEntity!,
            LineNumber: lineNumber!
          }
    );
  }
}
