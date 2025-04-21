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
import { WarehouseReplenishmentTemplateUnitOfMeasureRestrictions } from './WarehouseReplenishmentTemplateUnitOfMeasureRestrictions';

/**
 * Request builder class for operations supported on the {@link WarehouseReplenishmentTemplateUnitOfMeasureRestrictions} entity.
 */
export class WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<T>,
  T
> {
  /**
   * Returns a request builder for querying all `WarehouseReplenishmentTemplateUnitOfMeasureRestrictions` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseReplenishmentTemplateUnitOfMeasureRestrictions` entities.
   */
  getAll(): GetAllRequestBuilder<
    WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WarehouseReplenishmentTemplateUnitOfMeasureRestrictions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseReplenishmentTemplateUnitOfMeasureRestrictions`.
   */
  create(
    entity: WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<T>
  ): CreateRequestBuilder<
    WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<T>,
    T
  > {
    return new CreateRequestBuilder<
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `WarehouseReplenishmentTemplateUnitOfMeasureRestrictions` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseReplenishmentTemplateUnitOfMeasureRestrictions.dataAreaId}.
   * @param warehouseReplenishmentTemplateId Key property. See {@link WarehouseReplenishmentTemplateUnitOfMeasureRestrictions.warehouseReplenishmentTemplateId}.
   * @param restrictionUnitSymbol Key property. See {@link WarehouseReplenishmentTemplateUnitOfMeasureRestrictions.restrictionUnitSymbol}.
   * @returns A request builder for creating requests to retrieve one `WarehouseReplenishmentTemplateUnitOfMeasureRestrictions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    warehouseReplenishmentTemplateId: DeserializedType<T, 'Edm.String'>,
    restrictionUnitSymbol: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WarehouseReplenishmentTemplateId: warehouseReplenishmentTemplateId,
      RestrictionUnitSymbol: restrictionUnitSymbol
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseReplenishmentTemplateUnitOfMeasureRestrictions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseReplenishmentTemplateUnitOfMeasureRestrictions`.
   */
  update(
    entity: WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<T>
  ): UpdateRequestBuilder<
    WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<T>,
    T
  > {
    return new UpdateRequestBuilder<
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseReplenishmentTemplateUnitOfMeasureRestrictions`.
   * @param dataAreaId Key property. See {@link WarehouseReplenishmentTemplateUnitOfMeasureRestrictions.dataAreaId}.
   * @param warehouseReplenishmentTemplateId Key property. See {@link WarehouseReplenishmentTemplateUnitOfMeasureRestrictions.warehouseReplenishmentTemplateId}.
   * @param restrictionUnitSymbol Key property. See {@link WarehouseReplenishmentTemplateUnitOfMeasureRestrictions.restrictionUnitSymbol}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseReplenishmentTemplateUnitOfMeasureRestrictions`.
   */
  delete(
    dataAreaId: string,
    warehouseReplenishmentTemplateId: string,
    restrictionUnitSymbol: string
  ): DeleteRequestBuilder<
    WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseReplenishmentTemplateUnitOfMeasureRestrictions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseReplenishmentTemplateUnitOfMeasureRestrictions` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<T>
  ): DeleteRequestBuilder<
    WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    warehouseReplenishmentTemplateId?: string,
    restrictionUnitSymbol?: string
  ): DeleteRequestBuilder<
    WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<T>,
    T
  > {
    return new DeleteRequestBuilder<
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictions<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WarehouseReplenishmentTemplateId: warehouseReplenishmentTemplateId!,
            RestrictionUnitSymbol: restrictionUnitSymbol!
          }
    );
  }
}
