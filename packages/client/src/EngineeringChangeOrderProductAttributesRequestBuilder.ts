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
import { EngineeringChangeOrderProductAttributes } from './EngineeringChangeOrderProductAttributes';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductAttributes} entity.
 */
export class EngineeringChangeOrderProductAttributesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeOrderProductAttributes<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductAttributes` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductAttributes` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductAttributes<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductAttributes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductAttributes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductAttributes`.
   */
  create(
    entity: EngineeringChangeOrderProductAttributes<T>
  ): CreateRequestBuilder<EngineeringChangeOrderProductAttributes<T>, T> {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductAttributes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductAttributes` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductAttributes.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductAttributes.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductAttributes.engineeringChangeOrderProductLineNumber}.
   * @param engineeringProductAttributeName Key property. See {@link EngineeringChangeOrderProductAttributes.engineeringProductAttributeName}.
   * @param engineeringProductAttributeTypeName Key property. See {@link EngineeringChangeOrderProductAttributes.engineeringProductAttributeTypeName}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductAttributes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    engineeringProductAttributeName: DeserializedType<T, 'Edm.String'>,
    engineeringProductAttributeTypeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringChangeOrderProductAttributes<T>, T> {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductAttributes<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
      EngineeringChangeOrderProductLineNumber:
        engineeringChangeOrderProductLineNumber,
      EngineeringProductAttributeName: engineeringProductAttributeName,
      EngineeringProductAttributeTypeName: engineeringProductAttributeTypeName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductAttributes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductAttributes`.
   */
  update(
    entity: EngineeringChangeOrderProductAttributes<T>
  ): UpdateRequestBuilder<EngineeringChangeOrderProductAttributes<T>, T> {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductAttributes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductAttributes`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductAttributes.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductAttributes.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductAttributes.engineeringChangeOrderProductLineNumber}.
   * @param engineeringProductAttributeName Key property. See {@link EngineeringChangeOrderProductAttributes.engineeringProductAttributeName}.
   * @param engineeringProductAttributeTypeName Key property. See {@link EngineeringChangeOrderProductAttributes.engineeringProductAttributeTypeName}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductAttributes`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    engineeringProductAttributeName: string,
    engineeringProductAttributeTypeName: string
  ): DeleteRequestBuilder<EngineeringChangeOrderProductAttributes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductAttributes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductAttributes` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductAttributes<T>
  ): DeleteRequestBuilder<EngineeringChangeOrderProductAttributes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    engineeringProductAttributeName?: string,
    engineeringProductAttributeTypeName?: string
  ): DeleteRequestBuilder<EngineeringChangeOrderProductAttributes<T>, T> {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductAttributes<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof EngineeringChangeOrderProductAttributes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!,
            EngineeringChangeOrderProductLineNumber:
              engineeringChangeOrderProductLineNumber!,
            EngineeringProductAttributeName: engineeringProductAttributeName!,
            EngineeringProductAttributeTypeName:
              engineeringProductAttributeTypeName!
          }
    );
  }
}
