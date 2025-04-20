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
import { OutboundShipmentProcessingPolicies } from './OutboundShipmentProcessingPolicies';

/**
 * Request builder class for operations supported on the {@link OutboundShipmentProcessingPolicies} entity.
 */
export class OutboundShipmentProcessingPoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OutboundShipmentProcessingPolicies<T>, T> {
  /**
   * Returns a request builder for querying all `OutboundShipmentProcessingPolicies` entities.
   * @returns A request builder for creating requests to retrieve all `OutboundShipmentProcessingPolicies` entities.
   */
  getAll(): GetAllRequestBuilder<OutboundShipmentProcessingPolicies<T>, T> {
    return new GetAllRequestBuilder<OutboundShipmentProcessingPolicies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OutboundShipmentProcessingPolicies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OutboundShipmentProcessingPolicies`.
   */
  create(
    entity: OutboundShipmentProcessingPolicies<T>
  ): CreateRequestBuilder<OutboundShipmentProcessingPolicies<T>, T> {
    return new CreateRequestBuilder<OutboundShipmentProcessingPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OutboundShipmentProcessingPolicies` entity based on its keys.
   * @param dataAreaId Key property. See {@link OutboundShipmentProcessingPolicies.dataAreaId}.
   * @param policyName Key property. See {@link OutboundShipmentProcessingPolicies.policyName}.
   * @returns A request builder for creating requests to retrieve one `OutboundShipmentProcessingPolicies` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    policyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OutboundShipmentProcessingPolicies<T>, T> {
    return new GetByKeyRequestBuilder<OutboundShipmentProcessingPolicies<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PolicyName: policyName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OutboundShipmentProcessingPolicies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OutboundShipmentProcessingPolicies`.
   */
  update(
    entity: OutboundShipmentProcessingPolicies<T>
  ): UpdateRequestBuilder<OutboundShipmentProcessingPolicies<T>, T> {
    return new UpdateRequestBuilder<OutboundShipmentProcessingPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentProcessingPolicies`.
   * @param dataAreaId Key property. See {@link OutboundShipmentProcessingPolicies.dataAreaId}.
   * @param policyName Key property. See {@link OutboundShipmentProcessingPolicies.policyName}.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentProcessingPolicies`.
   */
  delete(
    dataAreaId: string,
    policyName: string
  ): DeleteRequestBuilder<OutboundShipmentProcessingPolicies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentProcessingPolicies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentProcessingPolicies` by taking the entity as a parameter.
   */
  delete(
    entity: OutboundShipmentProcessingPolicies<T>
  ): DeleteRequestBuilder<OutboundShipmentProcessingPolicies<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    policyName?: string
  ): DeleteRequestBuilder<OutboundShipmentProcessingPolicies<T>, T> {
    return new DeleteRequestBuilder<OutboundShipmentProcessingPolicies<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OutboundShipmentProcessingPolicies
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PolicyName: policyName!
          }
    );
  }
}
