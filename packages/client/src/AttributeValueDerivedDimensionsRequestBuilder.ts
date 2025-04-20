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
import { AttributeValueDerivedDimensions } from './AttributeValueDerivedDimensions';

/**
 * Request builder class for operations supported on the {@link AttributeValueDerivedDimensions} entity.
 */
export class AttributeValueDerivedDimensionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AttributeValueDerivedDimensions<T>, T> {
  /**
   * Returns a request builder for querying all `AttributeValueDerivedDimensions` entities.
   * @returns A request builder for creating requests to retrieve all `AttributeValueDerivedDimensions` entities.
   */
  getAll(): GetAllRequestBuilder<AttributeValueDerivedDimensions<T>, T> {
    return new GetAllRequestBuilder<AttributeValueDerivedDimensions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AttributeValueDerivedDimensions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AttributeValueDerivedDimensions`.
   */
  create(
    entity: AttributeValueDerivedDimensions<T>
  ): CreateRequestBuilder<AttributeValueDerivedDimensions<T>, T> {
    return new CreateRequestBuilder<AttributeValueDerivedDimensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AttributeValueDerivedDimensions` entity based on its keys.
   * @param drivingDimensionAttributeName Key property. See {@link AttributeValueDerivedDimensions.drivingDimensionAttributeName}.
   * @param drivingDimensionAttributeValue Key property. See {@link AttributeValueDerivedDimensions.drivingDimensionAttributeValue}.
   * @returns A request builder for creating requests to retrieve one `AttributeValueDerivedDimensions` entity based on its keys.
   */
  getByKey(
    drivingDimensionAttributeName: DeserializedType<T, 'Edm.String'>,
    drivingDimensionAttributeValue: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AttributeValueDerivedDimensions<T>, T> {
    return new GetByKeyRequestBuilder<AttributeValueDerivedDimensions<T>, T>(
      this.entityApi,
      {
        DrivingDimensionAttributeName: drivingDimensionAttributeName,
        DrivingDimensionAttributeValue: drivingDimensionAttributeValue
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AttributeValueDerivedDimensions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AttributeValueDerivedDimensions`.
   */
  update(
    entity: AttributeValueDerivedDimensions<T>
  ): UpdateRequestBuilder<AttributeValueDerivedDimensions<T>, T> {
    return new UpdateRequestBuilder<AttributeValueDerivedDimensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AttributeValueDerivedDimensions`.
   * @param drivingDimensionAttributeName Key property. See {@link AttributeValueDerivedDimensions.drivingDimensionAttributeName}.
   * @param drivingDimensionAttributeValue Key property. See {@link AttributeValueDerivedDimensions.drivingDimensionAttributeValue}.
   * @returns A request builder for creating requests that delete an entity of type `AttributeValueDerivedDimensions`.
   */
  delete(
    drivingDimensionAttributeName: string,
    drivingDimensionAttributeValue: string
  ): DeleteRequestBuilder<AttributeValueDerivedDimensions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AttributeValueDerivedDimensions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AttributeValueDerivedDimensions` by taking the entity as a parameter.
   */
  delete(
    entity: AttributeValueDerivedDimensions<T>
  ): DeleteRequestBuilder<AttributeValueDerivedDimensions<T>, T>;
  delete(
    drivingDimensionAttributeNameOrEntity: any,
    drivingDimensionAttributeValue?: string
  ): DeleteRequestBuilder<AttributeValueDerivedDimensions<T>, T> {
    return new DeleteRequestBuilder<AttributeValueDerivedDimensions<T>, T>(
      this.entityApi,
      drivingDimensionAttributeNameOrEntity instanceof
      AttributeValueDerivedDimensions
        ? drivingDimensionAttributeNameOrEntity
        : {
            DrivingDimensionAttributeName:
              drivingDimensionAttributeNameOrEntity!,
            DrivingDimensionAttributeValue: drivingDimensionAttributeValue!
          }
    );
  }
}
