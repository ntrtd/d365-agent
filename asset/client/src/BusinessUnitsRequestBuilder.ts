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
import { BusinessUnits } from './BusinessUnits';

/**
 * Request builder class for operations supported on the {@link BusinessUnits} entity.
 */
export class BusinessUnitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessUnits<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessUnits` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessUnits` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessUnits<T>, T> {
    return new GetAllRequestBuilder<BusinessUnits<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BusinessUnits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessUnits`.
   */
  create(entity: BusinessUnits<T>): CreateRequestBuilder<BusinessUnits<T>, T> {
    return new CreateRequestBuilder<BusinessUnits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessUnits` entity based on its keys.
   * @param operatingUnitNumber Key property. See {@link BusinessUnits.operatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `BusinessUnits` entity based on its keys.
   */
  getByKey(
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessUnits<T>, T> {
    return new GetByKeyRequestBuilder<BusinessUnits<T>, T>(this.entityApi, {
      OperatingUnitNumber: operatingUnitNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessUnits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessUnits`.
   */
  update(entity: BusinessUnits<T>): UpdateRequestBuilder<BusinessUnits<T>, T> {
    return new UpdateRequestBuilder<BusinessUnits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessUnits`.
   * @param operatingUnitNumber Key property. See {@link BusinessUnits.operatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessUnits`.
   */
  delete(
    operatingUnitNumber: string
  ): DeleteRequestBuilder<BusinessUnits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessUnits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessUnits` by taking the entity as a parameter.
   */
  delete(entity: BusinessUnits<T>): DeleteRequestBuilder<BusinessUnits<T>, T>;
  delete(
    operatingUnitNumberOrEntity: any
  ): DeleteRequestBuilder<BusinessUnits<T>, T> {
    return new DeleteRequestBuilder<BusinessUnits<T>, T>(
      this.entityApi,
      operatingUnitNumberOrEntity instanceof BusinessUnits
        ? operatingUnitNumberOrEntity
        : { OperatingUnitNumber: operatingUnitNumberOrEntity! }
    );
  }
}
