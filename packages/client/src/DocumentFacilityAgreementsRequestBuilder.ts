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
import { DocumentFacilityAgreements } from './DocumentFacilityAgreements';

/**
 * Request builder class for operations supported on the {@link DocumentFacilityAgreements} entity.
 */
export class DocumentFacilityAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentFacilityAgreements<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentFacilityAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentFacilityAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentFacilityAgreements<T>, T> {
    return new GetAllRequestBuilder<DocumentFacilityAgreements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DocumentFacilityAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentFacilityAgreements`.
   */
  create(
    entity: DocumentFacilityAgreements<T>
  ): CreateRequestBuilder<DocumentFacilityAgreements<T>, T> {
    return new CreateRequestBuilder<DocumentFacilityAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentFacilityAgreements` entity based on its keys.
   * @param dataAreaId Key property. See {@link DocumentFacilityAgreements.dataAreaId}.
   * @param agreementNumber Key property. See {@link DocumentFacilityAgreements.agreementNumber}.
   * @param facilityType Key property. See {@link DocumentFacilityAgreements.facilityType}.
   * @returns A request builder for creating requests to retrieve one `DocumentFacilityAgreements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    agreementNumber: DeserializedType<T, 'Edm.String'>,
    facilityType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentFacilityAgreements<T>, T> {
    return new GetByKeyRequestBuilder<DocumentFacilityAgreements<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AgreementNumber: agreementNumber,
        FacilityType: facilityType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentFacilityAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentFacilityAgreements`.
   */
  update(
    entity: DocumentFacilityAgreements<T>
  ): UpdateRequestBuilder<DocumentFacilityAgreements<T>, T> {
    return new UpdateRequestBuilder<DocumentFacilityAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentFacilityAgreements`.
   * @param dataAreaId Key property. See {@link DocumentFacilityAgreements.dataAreaId}.
   * @param agreementNumber Key property. See {@link DocumentFacilityAgreements.agreementNumber}.
   * @param facilityType Key property. See {@link DocumentFacilityAgreements.facilityType}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentFacilityAgreements`.
   */
  delete(
    dataAreaId: string,
    agreementNumber: string,
    facilityType: string
  ): DeleteRequestBuilder<DocumentFacilityAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentFacilityAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentFacilityAgreements` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentFacilityAgreements<T>
  ): DeleteRequestBuilder<DocumentFacilityAgreements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    agreementNumber?: string,
    facilityType?: string
  ): DeleteRequestBuilder<DocumentFacilityAgreements<T>, T> {
    return new DeleteRequestBuilder<DocumentFacilityAgreements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DocumentFacilityAgreements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AgreementNumber: agreementNumber!,
            FacilityType: facilityType!
          }
    );
  }
}
