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
import { WithholdCertificates } from './WithholdCertificates';
import { TaxWithholdAcTypeIn } from './TaxWithholdAcTypeIn';

/**
 * Request builder class for operations supported on the {@link WithholdCertificates} entity.
 */
export class WithholdCertificatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdCertificates<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdCertificates` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdCertificates` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdCertificates<T>, T> {
    return new GetAllRequestBuilder<WithholdCertificates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WithholdCertificates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdCertificates`.
   */
  create(
    entity: WithholdCertificates<T>
  ): CreateRequestBuilder<WithholdCertificates<T>, T> {
    return new CreateRequestBuilder<WithholdCertificates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdCertificates` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdCertificates.dataAreaId}.
   * @param certificateNumber Key property. See {@link WithholdCertificates.certificateNumber}.
   * @param accountType Key property. See {@link WithholdCertificates.accountType}.
   * @returns A request builder for creating requests to retrieve one `WithholdCertificates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    certificateNumber: DeserializedType<T, 'Edm.String'>,
    accountType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxWithholdACType_IN'
    >
  ): GetByKeyRequestBuilder<WithholdCertificates<T>, T> {
    return new GetByKeyRequestBuilder<WithholdCertificates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CertificateNumber: certificateNumber,
        AccountType: accountType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdCertificates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdCertificates`.
   */
  update(
    entity: WithholdCertificates<T>
  ): UpdateRequestBuilder<WithholdCertificates<T>, T> {
    return new UpdateRequestBuilder<WithholdCertificates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdCertificates`.
   * @param dataAreaId Key property. See {@link WithholdCertificates.dataAreaId}.
   * @param certificateNumber Key property. See {@link WithholdCertificates.certificateNumber}.
   * @param accountType Key property. See {@link WithholdCertificates.accountType}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdCertificates`.
   */
  delete(
    dataAreaId: string,
    certificateNumber: string,
    accountType: TaxWithholdAcTypeIn
  ): DeleteRequestBuilder<WithholdCertificates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdCertificates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdCertificates` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdCertificates<T>
  ): DeleteRequestBuilder<WithholdCertificates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    certificateNumber?: string,
    accountType?: TaxWithholdAcTypeIn
  ): DeleteRequestBuilder<WithholdCertificates<T>, T> {
    return new DeleteRequestBuilder<WithholdCertificates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdCertificates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CertificateNumber: certificateNumber!,
            AccountType: accountType!
          }
    );
  }
}
