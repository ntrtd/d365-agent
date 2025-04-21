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
import { PhysicalProductDimensionDetails } from './PhysicalProductDimensionDetails';
import { EcoResPhysicalDimensionType } from './EcoResPhysicalDimensionType';

/**
 * Request builder class for operations supported on the {@link PhysicalProductDimensionDetails} entity.
 */
export class PhysicalProductDimensionDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PhysicalProductDimensionDetails<T>, T> {
  /**
   * Returns a request builder for querying all `PhysicalProductDimensionDetails` entities.
   * @returns A request builder for creating requests to retrieve all `PhysicalProductDimensionDetails` entities.
   */
  getAll(): GetAllRequestBuilder<PhysicalProductDimensionDetails<T>, T> {
    return new GetAllRequestBuilder<PhysicalProductDimensionDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PhysicalProductDimensionDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PhysicalProductDimensionDetails`.
   */
  create(
    entity: PhysicalProductDimensionDetails<T>
  ): CreateRequestBuilder<PhysicalProductDimensionDetails<T>, T> {
    return new CreateRequestBuilder<PhysicalProductDimensionDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PhysicalProductDimensionDetails` entity based on its keys.
   * @param productNumber Key property. See {@link PhysicalProductDimensionDetails.productNumber}.
   * @param dimensionType Key property. See {@link PhysicalProductDimensionDetails.dimensionType}.
   * @param physicalUnitSymbol Key property. See {@link PhysicalProductDimensionDetails.physicalUnitSymbol}.
   * @returns A request builder for creating requests to retrieve one `PhysicalProductDimensionDetails` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>,
    dimensionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EcoResPhysicalDimensionType'
    >,
    physicalUnitSymbol: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PhysicalProductDimensionDetails<T>, T> {
    return new GetByKeyRequestBuilder<PhysicalProductDimensionDetails<T>, T>(
      this.entityApi,
      {
        ProductNumber: productNumber,
        DimensionType: dimensionType,
        PhysicalUnitSymbol: physicalUnitSymbol
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PhysicalProductDimensionDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PhysicalProductDimensionDetails`.
   */
  update(
    entity: PhysicalProductDimensionDetails<T>
  ): UpdateRequestBuilder<PhysicalProductDimensionDetails<T>, T> {
    return new UpdateRequestBuilder<PhysicalProductDimensionDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PhysicalProductDimensionDetails`.
   * @param productNumber Key property. See {@link PhysicalProductDimensionDetails.productNumber}.
   * @param dimensionType Key property. See {@link PhysicalProductDimensionDetails.dimensionType}.
   * @param physicalUnitSymbol Key property. See {@link PhysicalProductDimensionDetails.physicalUnitSymbol}.
   * @returns A request builder for creating requests that delete an entity of type `PhysicalProductDimensionDetails`.
   */
  delete(
    productNumber: string,
    dimensionType: EcoResPhysicalDimensionType,
    physicalUnitSymbol: string
  ): DeleteRequestBuilder<PhysicalProductDimensionDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PhysicalProductDimensionDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PhysicalProductDimensionDetails` by taking the entity as a parameter.
   */
  delete(
    entity: PhysicalProductDimensionDetails<T>
  ): DeleteRequestBuilder<PhysicalProductDimensionDetails<T>, T>;
  delete(
    productNumberOrEntity: any,
    dimensionType?: EcoResPhysicalDimensionType,
    physicalUnitSymbol?: string
  ): DeleteRequestBuilder<PhysicalProductDimensionDetails<T>, T> {
    return new DeleteRequestBuilder<PhysicalProductDimensionDetails<T>, T>(
      this.entityApi,
      productNumberOrEntity instanceof PhysicalProductDimensionDetails
        ? productNumberOrEntity
        : {
            ProductNumber: productNumberOrEntity!,
            DimensionType: dimensionType!,
            PhysicalUnitSymbol: physicalUnitSymbol!
          }
    );
  }
}
