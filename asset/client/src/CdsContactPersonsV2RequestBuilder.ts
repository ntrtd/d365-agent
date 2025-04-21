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
import { CdsContactPersonsV2 } from './CdsContactPersonsV2';
import { SmmContactPersonCdsAssociatedContactType } from './SmmContactPersonCdsAssociatedContactType';

/**
 * Request builder class for operations supported on the {@link CdsContactPersonsV2} entity.
 */
export class CdsContactPersonsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsContactPersonsV2<T>, T> {
  /**
   * Returns a request builder for querying all `CdsContactPersonsV2` entities.
   * @returns A request builder for creating requests to retrieve all `CdsContactPersonsV2` entities.
   */
  getAll(): GetAllRequestBuilder<CdsContactPersonsV2<T>, T> {
    return new GetAllRequestBuilder<CdsContactPersonsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CdsContactPersonsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsContactPersonsV2`.
   */
  create(
    entity: CdsContactPersonsV2<T>
  ): CreateRequestBuilder<CdsContactPersonsV2<T>, T> {
    return new CreateRequestBuilder<CdsContactPersonsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsContactPersonsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsContactPersonsV2.dataAreaId}.
   * @param contactPersonPartyNumber Key property. See {@link CdsContactPersonsV2.contactPersonPartyNumber}.
   * @param associatedContactType Key property. See {@link CdsContactPersonsV2.associatedContactType}.
   * @param associatedContactNumber Key property. See {@link CdsContactPersonsV2.associatedContactNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsContactPersonsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    contactPersonPartyNumber: DeserializedType<T, 'Edm.String'>,
    associatedContactType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.smmContactPersonCDSAssociatedContactType'
    >,
    associatedContactNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsContactPersonsV2<T>, T> {
    return new GetByKeyRequestBuilder<CdsContactPersonsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ContactPersonPartyNumber: contactPersonPartyNumber,
        AssociatedContactType: associatedContactType,
        AssociatedContactNumber: associatedContactNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsContactPersonsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsContactPersonsV2`.
   */
  update(
    entity: CdsContactPersonsV2<T>
  ): UpdateRequestBuilder<CdsContactPersonsV2<T>, T> {
    return new UpdateRequestBuilder<CdsContactPersonsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsContactPersonsV2`.
   * @param dataAreaId Key property. See {@link CdsContactPersonsV2.dataAreaId}.
   * @param contactPersonPartyNumber Key property. See {@link CdsContactPersonsV2.contactPersonPartyNumber}.
   * @param associatedContactType Key property. See {@link CdsContactPersonsV2.associatedContactType}.
   * @param associatedContactNumber Key property. See {@link CdsContactPersonsV2.associatedContactNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsContactPersonsV2`.
   */
  delete(
    dataAreaId: string,
    contactPersonPartyNumber: string,
    associatedContactType: SmmContactPersonCdsAssociatedContactType,
    associatedContactNumber: string
  ): DeleteRequestBuilder<CdsContactPersonsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsContactPersonsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsContactPersonsV2` by taking the entity as a parameter.
   */
  delete(
    entity: CdsContactPersonsV2<T>
  ): DeleteRequestBuilder<CdsContactPersonsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    contactPersonPartyNumber?: string,
    associatedContactType?: SmmContactPersonCdsAssociatedContactType,
    associatedContactNumber?: string
  ): DeleteRequestBuilder<CdsContactPersonsV2<T>, T> {
    return new DeleteRequestBuilder<CdsContactPersonsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsContactPersonsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ContactPersonPartyNumber: contactPersonPartyNumber!,
            AssociatedContactType: associatedContactType!,
            AssociatedContactNumber: associatedContactNumber!
          }
    );
  }
}
