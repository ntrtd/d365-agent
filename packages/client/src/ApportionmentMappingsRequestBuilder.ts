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
import { ApportionmentMappings } from './ApportionmentMappings';

/**
 * Request builder class for operations supported on the {@link ApportionmentMappings} entity.
 */
export class ApportionmentMappingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApportionmentMappings<T>, T> {
  /**
   * Returns a request builder for querying all `ApportionmentMappings` entities.
   * @returns A request builder for creating requests to retrieve all `ApportionmentMappings` entities.
   */
  getAll(): GetAllRequestBuilder<ApportionmentMappings<T>, T> {
    return new GetAllRequestBuilder<ApportionmentMappings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ApportionmentMappings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApportionmentMappings`.
   */
  create(
    entity: ApportionmentMappings<T>
  ): CreateRequestBuilder<ApportionmentMappings<T>, T> {
    return new CreateRequestBuilder<ApportionmentMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApportionmentMappings` entity based on its keys.
   * @param dataAreaId Key property. See {@link ApportionmentMappings.dataAreaId}.
   * @param shipCostTypeId Key property. See {@link ApportionmentMappings.shipCostTypeId}.
   * @returns A request builder for creating requests to retrieve one `ApportionmentMappings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipCostTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ApportionmentMappings<T>, T> {
    return new GetByKeyRequestBuilder<ApportionmentMappings<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipCostTypeId: shipCostTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApportionmentMappings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApportionmentMappings`.
   */
  update(
    entity: ApportionmentMappings<T>
  ): UpdateRequestBuilder<ApportionmentMappings<T>, T> {
    return new UpdateRequestBuilder<ApportionmentMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApportionmentMappings`.
   * @param dataAreaId Key property. See {@link ApportionmentMappings.dataAreaId}.
   * @param shipCostTypeId Key property. See {@link ApportionmentMappings.shipCostTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `ApportionmentMappings`.
   */
  delete(
    dataAreaId: string,
    shipCostTypeId: string
  ): DeleteRequestBuilder<ApportionmentMappings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApportionmentMappings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApportionmentMappings` by taking the entity as a parameter.
   */
  delete(
    entity: ApportionmentMappings<T>
  ): DeleteRequestBuilder<ApportionmentMappings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipCostTypeId?: string
  ): DeleteRequestBuilder<ApportionmentMappings<T>, T> {
    return new DeleteRequestBuilder<ApportionmentMappings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ApportionmentMappings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipCostTypeId: shipCostTypeId!
          }
    );
  }
}
