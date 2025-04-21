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
import { ShipConsolidationPolicies } from './ShipConsolidationPolicies';
import { WhsShipConsolidationPolicyType } from './WhsShipConsolidationPolicyType';

/**
 * Request builder class for operations supported on the {@link ShipConsolidationPolicies} entity.
 */
export class ShipConsolidationPoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShipConsolidationPolicies<T>, T> {
  /**
   * Returns a request builder for querying all `ShipConsolidationPolicies` entities.
   * @returns A request builder for creating requests to retrieve all `ShipConsolidationPolicies` entities.
   */
  getAll(): GetAllRequestBuilder<ShipConsolidationPolicies<T>, T> {
    return new GetAllRequestBuilder<ShipConsolidationPolicies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShipConsolidationPolicies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShipConsolidationPolicies`.
   */
  create(
    entity: ShipConsolidationPolicies<T>
  ): CreateRequestBuilder<ShipConsolidationPolicies<T>, T> {
    return new CreateRequestBuilder<ShipConsolidationPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShipConsolidationPolicies` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShipConsolidationPolicies.dataAreaId}.
   * @param shipConsolidationPolicyType Key property. See {@link ShipConsolidationPolicies.shipConsolidationPolicyType}.
   * @param shipConsolidationPolicyName Key property. See {@link ShipConsolidationPolicies.shipConsolidationPolicyName}.
   * @returns A request builder for creating requests to retrieve one `ShipConsolidationPolicies` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipConsolidationPolicyType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.WHSShipConsolidationPolicyType'
    >,
    shipConsolidationPolicyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShipConsolidationPolicies<T>, T> {
    return new GetByKeyRequestBuilder<ShipConsolidationPolicies<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipConsolidationPolicyType: shipConsolidationPolicyType,
        ShipConsolidationPolicyName: shipConsolidationPolicyName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShipConsolidationPolicies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShipConsolidationPolicies`.
   */
  update(
    entity: ShipConsolidationPolicies<T>
  ): UpdateRequestBuilder<ShipConsolidationPolicies<T>, T> {
    return new UpdateRequestBuilder<ShipConsolidationPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShipConsolidationPolicies`.
   * @param dataAreaId Key property. See {@link ShipConsolidationPolicies.dataAreaId}.
   * @param shipConsolidationPolicyType Key property. See {@link ShipConsolidationPolicies.shipConsolidationPolicyType}.
   * @param shipConsolidationPolicyName Key property. See {@link ShipConsolidationPolicies.shipConsolidationPolicyName}.
   * @returns A request builder for creating requests that delete an entity of type `ShipConsolidationPolicies`.
   */
  delete(
    dataAreaId: string,
    shipConsolidationPolicyType: WhsShipConsolidationPolicyType,
    shipConsolidationPolicyName: string
  ): DeleteRequestBuilder<ShipConsolidationPolicies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShipConsolidationPolicies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShipConsolidationPolicies` by taking the entity as a parameter.
   */
  delete(
    entity: ShipConsolidationPolicies<T>
  ): DeleteRequestBuilder<ShipConsolidationPolicies<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipConsolidationPolicyType?: WhsShipConsolidationPolicyType,
    shipConsolidationPolicyName?: string
  ): DeleteRequestBuilder<ShipConsolidationPolicies<T>, T> {
    return new DeleteRequestBuilder<ShipConsolidationPolicies<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShipConsolidationPolicies
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipConsolidationPolicyType: shipConsolidationPolicyType!,
            ShipConsolidationPolicyName: shipConsolidationPolicyName!
          }
    );
  }
}
