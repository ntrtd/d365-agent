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
import { CdsLeadContactPersons } from './CdsLeadContactPersons';

/**
 * Request builder class for operations supported on the {@link CdsLeadContactPersons} entity.
 */
export class CdsLeadContactPersonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsLeadContactPersons<T>, T> {
  /**
   * Returns a request builder for querying all `CdsLeadContactPersons` entities.
   * @returns A request builder for creating requests to retrieve all `CdsLeadContactPersons` entities.
   */
  getAll(): GetAllRequestBuilder<CdsLeadContactPersons<T>, T> {
    return new GetAllRequestBuilder<CdsLeadContactPersons<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsLeadContactPersons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsLeadContactPersons`.
   */
  create(
    entity: CdsLeadContactPersons<T>
  ): CreateRequestBuilder<CdsLeadContactPersons<T>, T> {
    return new CreateRequestBuilder<CdsLeadContactPersons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsLeadContactPersons` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsLeadContactPersons.dataAreaId}.
   * @param contactPersonPartyNumber Key property. See {@link CdsLeadContactPersons.contactPersonPartyNumber}.
   * @param leadId Key property. See {@link CdsLeadContactPersons.leadId}.
   * @returns A request builder for creating requests to retrieve one `CdsLeadContactPersons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    contactPersonPartyNumber: DeserializedType<T, 'Edm.String'>,
    leadId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsLeadContactPersons<T>, T> {
    return new GetByKeyRequestBuilder<CdsLeadContactPersons<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ContactPersonPartyNumber: contactPersonPartyNumber,
        LeadId: leadId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsLeadContactPersons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsLeadContactPersons`.
   */
  update(
    entity: CdsLeadContactPersons<T>
  ): UpdateRequestBuilder<CdsLeadContactPersons<T>, T> {
    return new UpdateRequestBuilder<CdsLeadContactPersons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsLeadContactPersons`.
   * @param dataAreaId Key property. See {@link CdsLeadContactPersons.dataAreaId}.
   * @param contactPersonPartyNumber Key property. See {@link CdsLeadContactPersons.contactPersonPartyNumber}.
   * @param leadId Key property. See {@link CdsLeadContactPersons.leadId}.
   * @returns A request builder for creating requests that delete an entity of type `CdsLeadContactPersons`.
   */
  delete(
    dataAreaId: string,
    contactPersonPartyNumber: string,
    leadId: string
  ): DeleteRequestBuilder<CdsLeadContactPersons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsLeadContactPersons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsLeadContactPersons` by taking the entity as a parameter.
   */
  delete(
    entity: CdsLeadContactPersons<T>
  ): DeleteRequestBuilder<CdsLeadContactPersons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    contactPersonPartyNumber?: string,
    leadId?: string
  ): DeleteRequestBuilder<CdsLeadContactPersons<T>, T> {
    return new DeleteRequestBuilder<CdsLeadContactPersons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsLeadContactPersons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ContactPersonPartyNumber: contactPersonPartyNumber!,
            LeadId: leadId!
          }
    );
  }
}
