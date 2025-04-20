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
import { VivaIntEssPersonalDetails } from './VivaIntEssPersonalDetails';

/**
 * Request builder class for operations supported on the {@link VivaIntEssPersonalDetails} entity.
 */
export class VivaIntEssPersonalDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VivaIntEssPersonalDetails<T>, T> {
  /**
   * Returns a request builder for querying all `VivaIntEssPersonalDetails` entities.
   * @returns A request builder for creating requests to retrieve all `VivaIntEssPersonalDetails` entities.
   */
  getAll(): GetAllRequestBuilder<VivaIntEssPersonalDetails<T>, T> {
    return new GetAllRequestBuilder<VivaIntEssPersonalDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VivaIntEssPersonalDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VivaIntEssPersonalDetails`.
   */
  create(
    entity: VivaIntEssPersonalDetails<T>
  ): CreateRequestBuilder<VivaIntEssPersonalDetails<T>, T> {
    return new CreateRequestBuilder<VivaIntEssPersonalDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VivaIntEssPersonalDetails` entity based on its keys.
   * @param personnelNumber Key property. See {@link VivaIntEssPersonalDetails.personnelNumber}.
   * @param legalEntityId Key property. See {@link VivaIntEssPersonalDetails.legalEntityId}.
   * @returns A request builder for creating requests to retrieve one `VivaIntEssPersonalDetails` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VivaIntEssPersonalDetails<T>, T> {
    return new GetByKeyRequestBuilder<VivaIntEssPersonalDetails<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        LegalEntityId: legalEntityId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VivaIntEssPersonalDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VivaIntEssPersonalDetails`.
   */
  update(
    entity: VivaIntEssPersonalDetails<T>
  ): UpdateRequestBuilder<VivaIntEssPersonalDetails<T>, T> {
    return new UpdateRequestBuilder<VivaIntEssPersonalDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VivaIntEssPersonalDetails`.
   * @param personnelNumber Key property. See {@link VivaIntEssPersonalDetails.personnelNumber}.
   * @param legalEntityId Key property. See {@link VivaIntEssPersonalDetails.legalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `VivaIntEssPersonalDetails`.
   */
  delete(
    personnelNumber: string,
    legalEntityId: string
  ): DeleteRequestBuilder<VivaIntEssPersonalDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VivaIntEssPersonalDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VivaIntEssPersonalDetails` by taking the entity as a parameter.
   */
  delete(
    entity: VivaIntEssPersonalDetails<T>
  ): DeleteRequestBuilder<VivaIntEssPersonalDetails<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    legalEntityId?: string
  ): DeleteRequestBuilder<VivaIntEssPersonalDetails<T>, T> {
    return new DeleteRequestBuilder<VivaIntEssPersonalDetails<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof VivaIntEssPersonalDetails
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            LegalEntityId: legalEntityId!
          }
    );
  }
}
