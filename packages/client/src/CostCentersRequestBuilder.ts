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
import { CostCenters } from './CostCenters';

/**
 * Request builder class for operations supported on the {@link CostCenters} entity.
 */
export class CostCentersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostCenters<T>, T> {
  /**
   * Returns a request builder for querying all `CostCenters` entities.
   * @returns A request builder for creating requests to retrieve all `CostCenters` entities.
   */
  getAll(): GetAllRequestBuilder<CostCenters<T>, T> {
    return new GetAllRequestBuilder<CostCenters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostCenters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostCenters`.
   */
  create(entity: CostCenters<T>): CreateRequestBuilder<CostCenters<T>, T> {
    return new CreateRequestBuilder<CostCenters<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostCenters` entity based on its keys.
   * @param operatingUnitNumber Key property. See {@link CostCenters.operatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `CostCenters` entity based on its keys.
   */
  getByKey(
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostCenters<T>, T> {
    return new GetByKeyRequestBuilder<CostCenters<T>, T>(this.entityApi, {
      OperatingUnitNumber: operatingUnitNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostCenters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostCenters`.
   */
  update(entity: CostCenters<T>): UpdateRequestBuilder<CostCenters<T>, T> {
    return new UpdateRequestBuilder<CostCenters<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostCenters`.
   * @param operatingUnitNumber Key property. See {@link CostCenters.operatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CostCenters`.
   */
  delete(operatingUnitNumber: string): DeleteRequestBuilder<CostCenters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostCenters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostCenters` by taking the entity as a parameter.
   */
  delete(entity: CostCenters<T>): DeleteRequestBuilder<CostCenters<T>, T>;
  delete(
    operatingUnitNumberOrEntity: any
  ): DeleteRequestBuilder<CostCenters<T>, T> {
    return new DeleteRequestBuilder<CostCenters<T>, T>(
      this.entityApi,
      operatingUnitNumberOrEntity instanceof CostCenters
        ? operatingUnitNumberOrEntity
        : { OperatingUnitNumber: operatingUnitNumberOrEntity! }
    );
  }
}
