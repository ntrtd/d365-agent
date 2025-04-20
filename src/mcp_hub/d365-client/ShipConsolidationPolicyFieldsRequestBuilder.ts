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
import { ShipConsolidationPolicyFields } from './ShipConsolidationPolicyFields';
import { WhsShipConsolidationPolicyType } from './WhsShipConsolidationPolicyType';

/**
 * Request builder class for operations supported on the {@link ShipConsolidationPolicyFields} entity.
 */
export class ShipConsolidationPolicyFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShipConsolidationPolicyFields<T>, T> {
  /**
   * Returns a request builder for querying all `ShipConsolidationPolicyFields` entities.
   * @returns A request builder for creating requests to retrieve all `ShipConsolidationPolicyFields` entities.
   */
  getAll(): GetAllRequestBuilder<ShipConsolidationPolicyFields<T>, T> {
    return new GetAllRequestBuilder<ShipConsolidationPolicyFields<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShipConsolidationPolicyFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShipConsolidationPolicyFields`.
   */
  create(
    entity: ShipConsolidationPolicyFields<T>
  ): CreateRequestBuilder<ShipConsolidationPolicyFields<T>, T> {
    return new CreateRequestBuilder<ShipConsolidationPolicyFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShipConsolidationPolicyFields` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShipConsolidationPolicyFields.dataAreaId}.
   * @param shipConsolidationPolicyType Key property. See {@link ShipConsolidationPolicyFields.shipConsolidationPolicyType}.
   * @param shipConsolidationPolicyName Key property. See {@link ShipConsolidationPolicyFields.shipConsolidationPolicyName}.
   * @param sourceTableName Key property. See {@link ShipConsolidationPolicyFields.sourceTableName}.
   * @param sourceFieldName Key property. See {@link ShipConsolidationPolicyFields.sourceFieldName}.
   * @returns A request builder for creating requests to retrieve one `ShipConsolidationPolicyFields` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipConsolidationPolicyType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.WHSShipConsolidationPolicyType'
    >,
    shipConsolidationPolicyName: DeserializedType<T, 'Edm.String'>,
    sourceTableName: DeserializedType<T, 'Edm.String'>,
    sourceFieldName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShipConsolidationPolicyFields<T>, T> {
    return new GetByKeyRequestBuilder<ShipConsolidationPolicyFields<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipConsolidationPolicyType: shipConsolidationPolicyType,
        ShipConsolidationPolicyName: shipConsolidationPolicyName,
        SourceTableName: sourceTableName,
        SourceFieldName: sourceFieldName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShipConsolidationPolicyFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShipConsolidationPolicyFields`.
   */
  update(
    entity: ShipConsolidationPolicyFields<T>
  ): UpdateRequestBuilder<ShipConsolidationPolicyFields<T>, T> {
    return new UpdateRequestBuilder<ShipConsolidationPolicyFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShipConsolidationPolicyFields`.
   * @param dataAreaId Key property. See {@link ShipConsolidationPolicyFields.dataAreaId}.
   * @param shipConsolidationPolicyType Key property. See {@link ShipConsolidationPolicyFields.shipConsolidationPolicyType}.
   * @param shipConsolidationPolicyName Key property. See {@link ShipConsolidationPolicyFields.shipConsolidationPolicyName}.
   * @param sourceTableName Key property. See {@link ShipConsolidationPolicyFields.sourceTableName}.
   * @param sourceFieldName Key property. See {@link ShipConsolidationPolicyFields.sourceFieldName}.
   * @returns A request builder for creating requests that delete an entity of type `ShipConsolidationPolicyFields`.
   */
  delete(
    dataAreaId: string,
    shipConsolidationPolicyType: WhsShipConsolidationPolicyType,
    shipConsolidationPolicyName: string,
    sourceTableName: string,
    sourceFieldName: string
  ): DeleteRequestBuilder<ShipConsolidationPolicyFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShipConsolidationPolicyFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShipConsolidationPolicyFields` by taking the entity as a parameter.
   */
  delete(
    entity: ShipConsolidationPolicyFields<T>
  ): DeleteRequestBuilder<ShipConsolidationPolicyFields<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipConsolidationPolicyType?: WhsShipConsolidationPolicyType,
    shipConsolidationPolicyName?: string,
    sourceTableName?: string,
    sourceFieldName?: string
  ): DeleteRequestBuilder<ShipConsolidationPolicyFields<T>, T> {
    return new DeleteRequestBuilder<ShipConsolidationPolicyFields<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShipConsolidationPolicyFields
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipConsolidationPolicyType: shipConsolidationPolicyType!,
            ShipConsolidationPolicyName: shipConsolidationPolicyName!,
            SourceTableName: sourceTableName!,
            SourceFieldName: sourceFieldName!
          }
    );
  }
}
