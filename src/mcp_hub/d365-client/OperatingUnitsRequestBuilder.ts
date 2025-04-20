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
import { OperatingUnits } from './OperatingUnits';

/**
 * Request builder class for operations supported on the {@link OperatingUnits} entity.
 */
export class OperatingUnitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OperatingUnits<T>, T> {
  /**
   * Returns a request builder for querying all `OperatingUnits` entities.
   * @returns A request builder for creating requests to retrieve all `OperatingUnits` entities.
   */
  getAll(): GetAllRequestBuilder<OperatingUnits<T>, T> {
    return new GetAllRequestBuilder<OperatingUnits<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OperatingUnits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OperatingUnits`.
   */
  create(
    entity: OperatingUnits<T>
  ): CreateRequestBuilder<OperatingUnits<T>, T> {
    return new CreateRequestBuilder<OperatingUnits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OperatingUnits` entity based on its keys.
   * @param operatingUnitNumber Key property. See {@link OperatingUnits.operatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `OperatingUnits` entity based on its keys.
   */
  getByKey(
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OperatingUnits<T>, T> {
    return new GetByKeyRequestBuilder<OperatingUnits<T>, T>(this.entityApi, {
      OperatingUnitNumber: operatingUnitNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OperatingUnits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OperatingUnits`.
   */
  update(
    entity: OperatingUnits<T>
  ): UpdateRequestBuilder<OperatingUnits<T>, T> {
    return new UpdateRequestBuilder<OperatingUnits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OperatingUnits`.
   * @param operatingUnitNumber Key property. See {@link OperatingUnits.operatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OperatingUnits`.
   */
  delete(
    operatingUnitNumber: string
  ): DeleteRequestBuilder<OperatingUnits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OperatingUnits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OperatingUnits` by taking the entity as a parameter.
   */
  delete(entity: OperatingUnits<T>): DeleteRequestBuilder<OperatingUnits<T>, T>;
  delete(
    operatingUnitNumberOrEntity: any
  ): DeleteRequestBuilder<OperatingUnits<T>, T> {
    return new DeleteRequestBuilder<OperatingUnits<T>, T>(
      this.entityApi,
      operatingUnitNumberOrEntity instanceof OperatingUnits
        ? operatingUnitNumberOrEntity
        : { OperatingUnitNumber: operatingUnitNumberOrEntity! }
    );
  }
}
