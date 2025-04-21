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
import { DepartmentsV2 } from './DepartmentsV2';

/**
 * Request builder class for operations supported on the {@link DepartmentsV2} entity.
 */
export class DepartmentsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DepartmentsV2<T>, T> {
  /**
   * Returns a request builder for querying all `DepartmentsV2` entities.
   * @returns A request builder for creating requests to retrieve all `DepartmentsV2` entities.
   */
  getAll(): GetAllRequestBuilder<DepartmentsV2<T>, T> {
    return new GetAllRequestBuilder<DepartmentsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DepartmentsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DepartmentsV2`.
   */
  create(entity: DepartmentsV2<T>): CreateRequestBuilder<DepartmentsV2<T>, T> {
    return new CreateRequestBuilder<DepartmentsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DepartmentsV2` entity based on its keys.
   * @param operatingUnitNumber Key property. See {@link DepartmentsV2.operatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `DepartmentsV2` entity based on its keys.
   */
  getByKey(
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DepartmentsV2<T>, T> {
    return new GetByKeyRequestBuilder<DepartmentsV2<T>, T>(this.entityApi, {
      OperatingUnitNumber: operatingUnitNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DepartmentsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DepartmentsV2`.
   */
  update(entity: DepartmentsV2<T>): UpdateRequestBuilder<DepartmentsV2<T>, T> {
    return new UpdateRequestBuilder<DepartmentsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DepartmentsV2`.
   * @param operatingUnitNumber Key property. See {@link DepartmentsV2.operatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DepartmentsV2`.
   */
  delete(
    operatingUnitNumber: string
  ): DeleteRequestBuilder<DepartmentsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DepartmentsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DepartmentsV2` by taking the entity as a parameter.
   */
  delete(entity: DepartmentsV2<T>): DeleteRequestBuilder<DepartmentsV2<T>, T>;
  delete(
    operatingUnitNumberOrEntity: any
  ): DeleteRequestBuilder<DepartmentsV2<T>, T> {
    return new DeleteRequestBuilder<DepartmentsV2<T>, T>(
      this.entityApi,
      operatingUnitNumberOrEntity instanceof DepartmentsV2
        ? operatingUnitNumberOrEntity
        : { OperatingUnitNumber: operatingUnitNumberOrEntity! }
    );
  }
}
