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
import { DeliveryModeChannelLines } from './DeliveryModeChannelLines';

/**
 * Request builder class for operations supported on the {@link DeliveryModeChannelLines} entity.
 */
export class DeliveryModeChannelLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeliveryModeChannelLines<T>, T> {
  /**
   * Returns a request builder for querying all `DeliveryModeChannelLines` entities.
   * @returns A request builder for creating requests to retrieve all `DeliveryModeChannelLines` entities.
   */
  getAll(): GetAllRequestBuilder<DeliveryModeChannelLines<T>, T> {
    return new GetAllRequestBuilder<DeliveryModeChannelLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DeliveryModeChannelLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeliveryModeChannelLines`.
   */
  create(
    entity: DeliveryModeChannelLines<T>
  ): CreateRequestBuilder<DeliveryModeChannelLines<T>, T> {
    return new CreateRequestBuilder<DeliveryModeChannelLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DeliveryModeChannelLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link DeliveryModeChannelLines.dataAreaId}.
   * @param modeOfDeliveryCode Key property. See {@link DeliveryModeChannelLines.modeOfDeliveryCode}.
   * @param partyNumber Key property. See {@link DeliveryModeChannelLines.partyNumber}.
   * @param organizationHierarchyType Key property. See {@link DeliveryModeChannelLines.organizationHierarchyType}.
   * @returns A request builder for creating requests to retrieve one `DeliveryModeChannelLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    modeOfDeliveryCode: DeserializedType<T, 'Edm.String'>,
    partyNumber: DeserializedType<T, 'Edm.String'>,
    organizationHierarchyType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DeliveryModeChannelLines<T>, T> {
    return new GetByKeyRequestBuilder<DeliveryModeChannelLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ModeOfDeliveryCode: modeOfDeliveryCode,
        PartyNumber: partyNumber,
        OrganizationHierarchyType: organizationHierarchyType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DeliveryModeChannelLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeliveryModeChannelLines`.
   */
  update(
    entity: DeliveryModeChannelLines<T>
  ): UpdateRequestBuilder<DeliveryModeChannelLines<T>, T> {
    return new UpdateRequestBuilder<DeliveryModeChannelLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DeliveryModeChannelLines`.
   * @param dataAreaId Key property. See {@link DeliveryModeChannelLines.dataAreaId}.
   * @param modeOfDeliveryCode Key property. See {@link DeliveryModeChannelLines.modeOfDeliveryCode}.
   * @param partyNumber Key property. See {@link DeliveryModeChannelLines.partyNumber}.
   * @param organizationHierarchyType Key property. See {@link DeliveryModeChannelLines.organizationHierarchyType}.
   * @returns A request builder for creating requests that delete an entity of type `DeliveryModeChannelLines`.
   */
  delete(
    dataAreaId: string,
    modeOfDeliveryCode: string,
    partyNumber: string,
    organizationHierarchyType: string
  ): DeleteRequestBuilder<DeliveryModeChannelLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeliveryModeChannelLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeliveryModeChannelLines` by taking the entity as a parameter.
   */
  delete(
    entity: DeliveryModeChannelLines<T>
  ): DeleteRequestBuilder<DeliveryModeChannelLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    modeOfDeliveryCode?: string,
    partyNumber?: string,
    organizationHierarchyType?: string
  ): DeleteRequestBuilder<DeliveryModeChannelLines<T>, T> {
    return new DeleteRequestBuilder<DeliveryModeChannelLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DeliveryModeChannelLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ModeOfDeliveryCode: modeOfDeliveryCode!,
            PartyNumber: partyNumber!,
            OrganizationHierarchyType: organizationHierarchyType!
          }
    );
  }
}
