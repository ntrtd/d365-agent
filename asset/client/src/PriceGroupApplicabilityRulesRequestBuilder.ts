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
import { PriceGroupApplicabilityRules } from './PriceGroupApplicabilityRules';

/**
 * Request builder class for operations supported on the {@link PriceGroupApplicabilityRules} entity.
 */
export class PriceGroupApplicabilityRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceGroupApplicabilityRules<T>, T> {
  /**
   * Returns a request builder for querying all `PriceGroupApplicabilityRules` entities.
   * @returns A request builder for creating requests to retrieve all `PriceGroupApplicabilityRules` entities.
   */
  getAll(): GetAllRequestBuilder<PriceGroupApplicabilityRules<T>, T> {
    return new GetAllRequestBuilder<PriceGroupApplicabilityRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PriceGroupApplicabilityRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceGroupApplicabilityRules`.
   */
  create(
    entity: PriceGroupApplicabilityRules<T>
  ): CreateRequestBuilder<PriceGroupApplicabilityRules<T>, T> {
    return new CreateRequestBuilder<PriceGroupApplicabilityRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PriceGroupApplicabilityRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link PriceGroupApplicabilityRules.dataAreaId}.
   * @param guidId Key property. See {@link PriceGroupApplicabilityRules.guidId}.
   * @returns A request builder for creating requests to retrieve one `PriceGroupApplicabilityRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    guidId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<PriceGroupApplicabilityRules<T>, T> {
    return new GetByKeyRequestBuilder<PriceGroupApplicabilityRules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GuidId: guidId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PriceGroupApplicabilityRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceGroupApplicabilityRules`.
   */
  update(
    entity: PriceGroupApplicabilityRules<T>
  ): UpdateRequestBuilder<PriceGroupApplicabilityRules<T>, T> {
    return new UpdateRequestBuilder<PriceGroupApplicabilityRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceGroupApplicabilityRules`.
   * @param dataAreaId Key property. See {@link PriceGroupApplicabilityRules.dataAreaId}.
   * @param guidId Key property. See {@link PriceGroupApplicabilityRules.guidId}.
   * @returns A request builder for creating requests that delete an entity of type `PriceGroupApplicabilityRules`.
   */
  delete(
    dataAreaId: string,
    guidId: string
  ): DeleteRequestBuilder<PriceGroupApplicabilityRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceGroupApplicabilityRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceGroupApplicabilityRules` by taking the entity as a parameter.
   */
  delete(
    entity: PriceGroupApplicabilityRules<T>
  ): DeleteRequestBuilder<PriceGroupApplicabilityRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    guidId?: string
  ): DeleteRequestBuilder<PriceGroupApplicabilityRules<T>, T> {
    return new DeleteRequestBuilder<PriceGroupApplicabilityRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PriceGroupApplicabilityRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GuidId: guidId!
          }
    );
  }
}
