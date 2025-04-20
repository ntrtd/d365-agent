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
import { PriceComponentCodes } from './PriceComponentCodes';
import { GupPricingAttributeSourceLevel } from './GupPricingAttributeSourceLevel';

/**
 * Request builder class for operations supported on the {@link PriceComponentCodes} entity.
 */
export class PriceComponentCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceComponentCodes<T>, T> {
  /**
   * Returns a request builder for querying all `PriceComponentCodes` entities.
   * @returns A request builder for creating requests to retrieve all `PriceComponentCodes` entities.
   */
  getAll(): GetAllRequestBuilder<PriceComponentCodes<T>, T> {
    return new GetAllRequestBuilder<PriceComponentCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PriceComponentCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceComponentCodes`.
   */
  create(
    entity: PriceComponentCodes<T>
  ): CreateRequestBuilder<PriceComponentCodes<T>, T> {
    return new CreateRequestBuilder<PriceComponentCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PriceComponentCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link PriceComponentCodes.dataAreaId}.
   * @param name Key property. See {@link PriceComponentCodes.name}.
   * @param priceAttributeGroup Key property. See {@link PriceComponentCodes.priceAttributeGroup}.
   * @param sourceLevel Key property. See {@link PriceComponentCodes.sourceLevel}.
   * @returns A request builder for creating requests to retrieve one `PriceComponentCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>,
    priceAttributeGroup: DeserializedType<T, 'Edm.String'>,
    sourceLevel: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.GUPPricingAttributeSourceLevel'
    >
  ): GetByKeyRequestBuilder<PriceComponentCodes<T>, T> {
    return new GetByKeyRequestBuilder<PriceComponentCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name,
        PriceAttributeGroup: priceAttributeGroup,
        SourceLevel: sourceLevel
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PriceComponentCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceComponentCodes`.
   */
  update(
    entity: PriceComponentCodes<T>
  ): UpdateRequestBuilder<PriceComponentCodes<T>, T> {
    return new UpdateRequestBuilder<PriceComponentCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceComponentCodes`.
   * @param dataAreaId Key property. See {@link PriceComponentCodes.dataAreaId}.
   * @param name Key property. See {@link PriceComponentCodes.name}.
   * @param priceAttributeGroup Key property. See {@link PriceComponentCodes.priceAttributeGroup}.
   * @param sourceLevel Key property. See {@link PriceComponentCodes.sourceLevel}.
   * @returns A request builder for creating requests that delete an entity of type `PriceComponentCodes`.
   */
  delete(
    dataAreaId: string,
    name: string,
    priceAttributeGroup: string,
    sourceLevel: GupPricingAttributeSourceLevel
  ): DeleteRequestBuilder<PriceComponentCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceComponentCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceComponentCodes` by taking the entity as a parameter.
   */
  delete(
    entity: PriceComponentCodes<T>
  ): DeleteRequestBuilder<PriceComponentCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string,
    priceAttributeGroup?: string,
    sourceLevel?: GupPricingAttributeSourceLevel
  ): DeleteRequestBuilder<PriceComponentCodes<T>, T> {
    return new DeleteRequestBuilder<PriceComponentCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PriceComponentCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!,
            PriceAttributeGroup: priceAttributeGroup!,
            SourceLevel: sourceLevel!
          }
    );
  }
}
