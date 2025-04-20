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
import { EngineeringChangeOrderProductsV3 } from './EngineeringChangeOrderProductsV3';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductsV3} entity.
 */
export class EngineeringChangeOrderProductsV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeOrderProductsV3<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductsV3` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductsV3` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangeOrderProductsV3<T>, T> {
    return new GetAllRequestBuilder<EngineeringChangeOrderProductsV3<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductsV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductsV3`.
   */
  create(
    entity: EngineeringChangeOrderProductsV3<T>
  ): CreateRequestBuilder<EngineeringChangeOrderProductsV3<T>, T> {
    return new CreateRequestBuilder<EngineeringChangeOrderProductsV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductsV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductsV3.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductsV3.engineeringChangeOrderNumber}.
   * @param lineNumber Key property. See {@link EngineeringChangeOrderProductsV3.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductsV3` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<EngineeringChangeOrderProductsV3<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringChangeOrderProductsV3<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductsV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductsV3`.
   */
  update(
    entity: EngineeringChangeOrderProductsV3<T>
  ): UpdateRequestBuilder<EngineeringChangeOrderProductsV3<T>, T> {
    return new UpdateRequestBuilder<EngineeringChangeOrderProductsV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductsV3`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductsV3.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductsV3.engineeringChangeOrderNumber}.
   * @param lineNumber Key property. See {@link EngineeringChangeOrderProductsV3.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductsV3`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<EngineeringChangeOrderProductsV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductsV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductsV3` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductsV3<T>
  ): DeleteRequestBuilder<EngineeringChangeOrderProductsV3<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<EngineeringChangeOrderProductsV3<T>, T> {
    return new DeleteRequestBuilder<EngineeringChangeOrderProductsV3<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EngineeringChangeOrderProductsV3
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
