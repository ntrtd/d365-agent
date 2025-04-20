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
import { AssetMaintenanceFunctionalLocationTypeAttributeRequirements } from './AssetMaintenanceFunctionalLocationTypeAttributeRequirements';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFunctionalLocationTypeAttributeRequirements} entity.
 */
export class AssetMaintenanceFunctionalLocationTypeAttributeRequirementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetMaintenanceFunctionalLocationTypeAttributeRequirements<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFunctionalLocationTypeAttributeRequirements` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFunctionalLocationTypeAttributeRequirements` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceFunctionalLocationTypeAttributeRequirements<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFunctionalLocationTypeAttributeRequirements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFunctionalLocationTypeAttributeRequirements`.
   */
  create(
    entity: AssetMaintenanceFunctionalLocationTypeAttributeRequirements<T>
  ): CreateRequestBuilder<
    AssetMaintenanceFunctionalLocationTypeAttributeRequirements<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFunctionalLocationTypeAttributeRequirements` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationTypeAttributeRequirements.dataAreaId}.
   * @param functionalLocationTypeId Key property. See {@link AssetMaintenanceFunctionalLocationTypeAttributeRequirements.functionalLocationTypeId}.
   * @param attributeTypeId Key property. See {@link AssetMaintenanceFunctionalLocationTypeAttributeRequirements.attributeTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFunctionalLocationTypeAttributeRequirements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    functionalLocationTypeId: DeserializedType<T, 'Edm.String'>,
    attributeTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceFunctionalLocationTypeAttributeRequirements<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      FunctionalLocationTypeId: functionalLocationTypeId,
      AttributeTypeId: attributeTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFunctionalLocationTypeAttributeRequirements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFunctionalLocationTypeAttributeRequirements`.
   */
  update(
    entity: AssetMaintenanceFunctionalLocationTypeAttributeRequirements<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceFunctionalLocationTypeAttributeRequirements<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationTypeAttributeRequirements`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationTypeAttributeRequirements.dataAreaId}.
   * @param functionalLocationTypeId Key property. See {@link AssetMaintenanceFunctionalLocationTypeAttributeRequirements.functionalLocationTypeId}.
   * @param attributeTypeId Key property. See {@link AssetMaintenanceFunctionalLocationTypeAttributeRequirements.attributeTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationTypeAttributeRequirements`.
   */
  delete(
    dataAreaId: string,
    functionalLocationTypeId: string,
    attributeTypeId: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationTypeAttributeRequirements<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationTypeAttributeRequirements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationTypeAttributeRequirements` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFunctionalLocationTypeAttributeRequirements<T>
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationTypeAttributeRequirements<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    functionalLocationTypeId?: string,
    attributeTypeId?: string
  ): DeleteRequestBuilder<
    AssetMaintenanceFunctionalLocationTypeAttributeRequirements<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceFunctionalLocationTypeAttributeRequirements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FunctionalLocationTypeId: functionalLocationTypeId!,
            AttributeTypeId: attributeTypeId!
          }
    );
  }
}
