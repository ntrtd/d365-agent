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
import { ShipConsolidationPoliciesV3 } from './ShipConsolidationPoliciesV3';
import { WhsShipConsolidationPolicyType } from './WhsShipConsolidationPolicyType';

/**
 * Request builder class for operations supported on the {@link ShipConsolidationPoliciesV3} entity.
 */
export class ShipConsolidationPoliciesV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShipConsolidationPoliciesV3<T>, T> {
  /**
   * Returns a request builder for querying all `ShipConsolidationPoliciesV3` entities.
   * @returns A request builder for creating requests to retrieve all `ShipConsolidationPoliciesV3` entities.
   */
  getAll(): GetAllRequestBuilder<ShipConsolidationPoliciesV3<T>, T> {
    return new GetAllRequestBuilder<ShipConsolidationPoliciesV3<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShipConsolidationPoliciesV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShipConsolidationPoliciesV3`.
   */
  create(
    entity: ShipConsolidationPoliciesV3<T>
  ): CreateRequestBuilder<ShipConsolidationPoliciesV3<T>, T> {
    return new CreateRequestBuilder<ShipConsolidationPoliciesV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShipConsolidationPoliciesV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShipConsolidationPoliciesV3.dataAreaId}.
   * @param shipConsolidationPolicyType Key property. See {@link ShipConsolidationPoliciesV3.shipConsolidationPolicyType}.
   * @param shipConsolidationPolicyName Key property. See {@link ShipConsolidationPoliciesV3.shipConsolidationPolicyName}.
   * @returns A request builder for creating requests to retrieve one `ShipConsolidationPoliciesV3` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipConsolidationPolicyType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.WHSShipConsolidationPolicyType'
    >,
    shipConsolidationPolicyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShipConsolidationPoliciesV3<T>, T> {
    return new GetByKeyRequestBuilder<ShipConsolidationPoliciesV3<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipConsolidationPolicyType: shipConsolidationPolicyType,
        ShipConsolidationPolicyName: shipConsolidationPolicyName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShipConsolidationPoliciesV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShipConsolidationPoliciesV3`.
   */
  update(
    entity: ShipConsolidationPoliciesV3<T>
  ): UpdateRequestBuilder<ShipConsolidationPoliciesV3<T>, T> {
    return new UpdateRequestBuilder<ShipConsolidationPoliciesV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShipConsolidationPoliciesV3`.
   * @param dataAreaId Key property. See {@link ShipConsolidationPoliciesV3.dataAreaId}.
   * @param shipConsolidationPolicyType Key property. See {@link ShipConsolidationPoliciesV3.shipConsolidationPolicyType}.
   * @param shipConsolidationPolicyName Key property. See {@link ShipConsolidationPoliciesV3.shipConsolidationPolicyName}.
   * @returns A request builder for creating requests that delete an entity of type `ShipConsolidationPoliciesV3`.
   */
  delete(
    dataAreaId: string,
    shipConsolidationPolicyType: WhsShipConsolidationPolicyType,
    shipConsolidationPolicyName: string
  ): DeleteRequestBuilder<ShipConsolidationPoliciesV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShipConsolidationPoliciesV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShipConsolidationPoliciesV3` by taking the entity as a parameter.
   */
  delete(
    entity: ShipConsolidationPoliciesV3<T>
  ): DeleteRequestBuilder<ShipConsolidationPoliciesV3<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipConsolidationPolicyType?: WhsShipConsolidationPolicyType,
    shipConsolidationPolicyName?: string
  ): DeleteRequestBuilder<ShipConsolidationPoliciesV3<T>, T> {
    return new DeleteRequestBuilder<ShipConsolidationPoliciesV3<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShipConsolidationPoliciesV3
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipConsolidationPolicyType: shipConsolidationPolicyType!,
            ShipConsolidationPolicyName: shipConsolidationPolicyName!
          }
    );
  }
}
