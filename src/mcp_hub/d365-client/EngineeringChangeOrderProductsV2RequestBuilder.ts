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
import { EngineeringChangeOrderProductsV2 } from './EngineeringChangeOrderProductsV2';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductsV2} entity.
 */
export class EngineeringChangeOrderProductsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeOrderProductsV2<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductsV2` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductsV2` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangeOrderProductsV2<T>, T> {
    return new GetAllRequestBuilder<EngineeringChangeOrderProductsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductsV2`.
   */
  create(
    entity: EngineeringChangeOrderProductsV2<T>
  ): CreateRequestBuilder<EngineeringChangeOrderProductsV2<T>, T> {
    return new CreateRequestBuilder<EngineeringChangeOrderProductsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductsV2.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductsV2.engineeringChangeOrderNumber}.
   * @param lineNumber Key property. See {@link EngineeringChangeOrderProductsV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<EngineeringChangeOrderProductsV2<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringChangeOrderProductsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductsV2`.
   */
  update(
    entity: EngineeringChangeOrderProductsV2<T>
  ): UpdateRequestBuilder<EngineeringChangeOrderProductsV2<T>, T> {
    return new UpdateRequestBuilder<EngineeringChangeOrderProductsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductsV2`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductsV2.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductsV2.engineeringChangeOrderNumber}.
   * @param lineNumber Key property. See {@link EngineeringChangeOrderProductsV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductsV2`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<EngineeringChangeOrderProductsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductsV2` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductsV2<T>
  ): DeleteRequestBuilder<EngineeringChangeOrderProductsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<EngineeringChangeOrderProductsV2<T>, T> {
    return new DeleteRequestBuilder<EngineeringChangeOrderProductsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EngineeringChangeOrderProductsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
