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
import { ShipConsolidationPoliciesV2 } from './ShipConsolidationPoliciesV2';
import { WhsShipConsolidationPolicyType } from './WhsShipConsolidationPolicyType';

/**
 * Request builder class for operations supported on the {@link ShipConsolidationPoliciesV2} entity.
 */
export class ShipConsolidationPoliciesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShipConsolidationPoliciesV2<T>, T> {
  /**
   * Returns a request builder for querying all `ShipConsolidationPoliciesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ShipConsolidationPoliciesV2` entities.
   */
  getAll(): GetAllRequestBuilder<ShipConsolidationPoliciesV2<T>, T> {
    return new GetAllRequestBuilder<ShipConsolidationPoliciesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShipConsolidationPoliciesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShipConsolidationPoliciesV2`.
   */
  create(
    entity: ShipConsolidationPoliciesV2<T>
  ): CreateRequestBuilder<ShipConsolidationPoliciesV2<T>, T> {
    return new CreateRequestBuilder<ShipConsolidationPoliciesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShipConsolidationPoliciesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShipConsolidationPoliciesV2.dataAreaId}.
   * @param shipConsolidationPolicyType Key property. See {@link ShipConsolidationPoliciesV2.shipConsolidationPolicyType}.
   * @param shipConsolidationPolicyName Key property. See {@link ShipConsolidationPoliciesV2.shipConsolidationPolicyName}.
   * @returns A request builder for creating requests to retrieve one `ShipConsolidationPoliciesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipConsolidationPolicyType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.WHSShipConsolidationPolicyType'
    >,
    shipConsolidationPolicyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShipConsolidationPoliciesV2<T>, T> {
    return new GetByKeyRequestBuilder<ShipConsolidationPoliciesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipConsolidationPolicyType: shipConsolidationPolicyType,
        ShipConsolidationPolicyName: shipConsolidationPolicyName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShipConsolidationPoliciesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShipConsolidationPoliciesV2`.
   */
  update(
    entity: ShipConsolidationPoliciesV2<T>
  ): UpdateRequestBuilder<ShipConsolidationPoliciesV2<T>, T> {
    return new UpdateRequestBuilder<ShipConsolidationPoliciesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShipConsolidationPoliciesV2`.
   * @param dataAreaId Key property. See {@link ShipConsolidationPoliciesV2.dataAreaId}.
   * @param shipConsolidationPolicyType Key property. See {@link ShipConsolidationPoliciesV2.shipConsolidationPolicyType}.
   * @param shipConsolidationPolicyName Key property. See {@link ShipConsolidationPoliciesV2.shipConsolidationPolicyName}.
   * @returns A request builder for creating requests that delete an entity of type `ShipConsolidationPoliciesV2`.
   */
  delete(
    dataAreaId: string,
    shipConsolidationPolicyType: WhsShipConsolidationPolicyType,
    shipConsolidationPolicyName: string
  ): DeleteRequestBuilder<ShipConsolidationPoliciesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShipConsolidationPoliciesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShipConsolidationPoliciesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ShipConsolidationPoliciesV2<T>
  ): DeleteRequestBuilder<ShipConsolidationPoliciesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipConsolidationPolicyType?: WhsShipConsolidationPolicyType,
    shipConsolidationPolicyName?: string
  ): DeleteRequestBuilder<ShipConsolidationPoliciesV2<T>, T> {
    return new DeleteRequestBuilder<ShipConsolidationPoliciesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShipConsolidationPoliciesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipConsolidationPolicyType: shipConsolidationPolicyType!,
            ShipConsolidationPolicyName: shipConsolidationPolicyName!
          }
    );
  }
}
