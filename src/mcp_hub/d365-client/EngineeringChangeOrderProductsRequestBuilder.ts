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
import { EngineeringChangeOrderProducts } from './EngineeringChangeOrderProducts';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProducts} entity.
 */
export class EngineeringChangeOrderProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeOrderProducts<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProducts` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProducts` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangeOrderProducts<T>, T> {
    return new GetAllRequestBuilder<EngineeringChangeOrderProducts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProducts`.
   */
  create(
    entity: EngineeringChangeOrderProducts<T>
  ): CreateRequestBuilder<EngineeringChangeOrderProducts<T>, T> {
    return new CreateRequestBuilder<EngineeringChangeOrderProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProducts` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProducts.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProducts.engineeringChangeOrderNumber}.
   * @param lineNumber Key property. See {@link EngineeringChangeOrderProducts.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProducts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<EngineeringChangeOrderProducts<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringChangeOrderProducts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProducts`.
   */
  update(
    entity: EngineeringChangeOrderProducts<T>
  ): UpdateRequestBuilder<EngineeringChangeOrderProducts<T>, T> {
    return new UpdateRequestBuilder<EngineeringChangeOrderProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProducts`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProducts.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProducts.engineeringChangeOrderNumber}.
   * @param lineNumber Key property. See {@link EngineeringChangeOrderProducts.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProducts`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<EngineeringChangeOrderProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProducts` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProducts<T>
  ): DeleteRequestBuilder<EngineeringChangeOrderProducts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<EngineeringChangeOrderProducts<T>, T> {
    return new DeleteRequestBuilder<EngineeringChangeOrderProducts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EngineeringChangeOrderProducts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
