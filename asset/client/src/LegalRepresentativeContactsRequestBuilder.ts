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
import { LegalRepresentativeContacts } from './LegalRepresentativeContacts';
import { LegalRepresentativeTypeBr } from './LegalRepresentativeTypeBr';

/**
 * Request builder class for operations supported on the {@link LegalRepresentativeContacts} entity.
 */
export class LegalRepresentativeContactsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LegalRepresentativeContacts<T>, T> {
  /**
   * Returns a request builder for querying all `LegalRepresentativeContacts` entities.
   * @returns A request builder for creating requests to retrieve all `LegalRepresentativeContacts` entities.
   */
  getAll(): GetAllRequestBuilder<LegalRepresentativeContacts<T>, T> {
    return new GetAllRequestBuilder<LegalRepresentativeContacts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LegalRepresentativeContacts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LegalRepresentativeContacts`.
   */
  create(
    entity: LegalRepresentativeContacts<T>
  ): CreateRequestBuilder<LegalRepresentativeContacts<T>, T> {
    return new CreateRequestBuilder<LegalRepresentativeContacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LegalRepresentativeContacts` entity based on its keys.
   * @param fiscalOrganizationRootFiscalEstablishmentDataArea Key property. See {@link LegalRepresentativeContacts.fiscalOrganizationRootFiscalEstablishmentDataArea}.
   * @param fiscalOrganizationRootFiscalEstablishment Key property. See {@link LegalRepresentativeContacts.fiscalOrganizationRootFiscalEstablishment}.
   * @param legalRepresentativeCpf Key property. See {@link LegalRepresentativeContacts.legalRepresentativeCpf}.
   * @param legalRepresentativeRole Key property. See {@link LegalRepresentativeContacts.legalRepresentativeRole}.
   * @param contactNumberOrAddress Key property. See {@link LegalRepresentativeContacts.contactNumberOrAddress}.
   * @returns A request builder for creating requests to retrieve one `LegalRepresentativeContacts` entity based on its keys.
   */
  getByKey(
    fiscalOrganizationRootFiscalEstablishmentDataArea: DeserializedType<
      T,
      'Edm.String'
    >,
    fiscalOrganizationRootFiscalEstablishment: DeserializedType<
      T,
      'Edm.String'
    >,
    legalRepresentativeCpf: DeserializedType<T, 'Edm.String'>,
    legalRepresentativeRole: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LegalRepresentativeType_BR'
    >,
    contactNumberOrAddress: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LegalRepresentativeContacts<T>, T> {
    return new GetByKeyRequestBuilder<LegalRepresentativeContacts<T>, T>(
      this.entityApi,
      {
        FiscalOrganizationRootFiscalEstablishmentDataArea:
          fiscalOrganizationRootFiscalEstablishmentDataArea,
        FiscalOrganizationRootFiscalEstablishment:
          fiscalOrganizationRootFiscalEstablishment,
        LegalRepresentativeCPF: legalRepresentativeCpf,
        LegalRepresentativeRole: legalRepresentativeRole,
        ContactNumberOrAddress: contactNumberOrAddress
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LegalRepresentativeContacts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LegalRepresentativeContacts`.
   */
  update(
    entity: LegalRepresentativeContacts<T>
  ): UpdateRequestBuilder<LegalRepresentativeContacts<T>, T> {
    return new UpdateRequestBuilder<LegalRepresentativeContacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LegalRepresentativeContacts`.
   * @param fiscalOrganizationRootFiscalEstablishmentDataArea Key property. See {@link LegalRepresentativeContacts.fiscalOrganizationRootFiscalEstablishmentDataArea}.
   * @param fiscalOrganizationRootFiscalEstablishment Key property. See {@link LegalRepresentativeContacts.fiscalOrganizationRootFiscalEstablishment}.
   * @param legalRepresentativeCpf Key property. See {@link LegalRepresentativeContacts.legalRepresentativeCpf}.
   * @param legalRepresentativeRole Key property. See {@link LegalRepresentativeContacts.legalRepresentativeRole}.
   * @param contactNumberOrAddress Key property. See {@link LegalRepresentativeContacts.contactNumberOrAddress}.
   * @returns A request builder for creating requests that delete an entity of type `LegalRepresentativeContacts`.
   */
  delete(
    fiscalOrganizationRootFiscalEstablishmentDataArea: string,
    fiscalOrganizationRootFiscalEstablishment: string,
    legalRepresentativeCpf: string,
    legalRepresentativeRole: LegalRepresentativeTypeBr,
    contactNumberOrAddress: string
  ): DeleteRequestBuilder<LegalRepresentativeContacts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LegalRepresentativeContacts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LegalRepresentativeContacts` by taking the entity as a parameter.
   */
  delete(
    entity: LegalRepresentativeContacts<T>
  ): DeleteRequestBuilder<LegalRepresentativeContacts<T>, T>;
  delete(
    fiscalOrganizationRootFiscalEstablishmentDataAreaOrEntity: any,
    fiscalOrganizationRootFiscalEstablishment?: string,
    legalRepresentativeCpf?: string,
    legalRepresentativeRole?: LegalRepresentativeTypeBr,
    contactNumberOrAddress?: string
  ): DeleteRequestBuilder<LegalRepresentativeContacts<T>, T> {
    return new DeleteRequestBuilder<LegalRepresentativeContacts<T>, T>(
      this.entityApi,
      fiscalOrganizationRootFiscalEstablishmentDataAreaOrEntity instanceof
      LegalRepresentativeContacts
        ? fiscalOrganizationRootFiscalEstablishmentDataAreaOrEntity
        : {
            FiscalOrganizationRootFiscalEstablishmentDataArea:
              fiscalOrganizationRootFiscalEstablishmentDataAreaOrEntity!,
            FiscalOrganizationRootFiscalEstablishment:
              fiscalOrganizationRootFiscalEstablishment!,
            LegalRepresentativeCPF: legalRepresentativeCpf!,
            LegalRepresentativeRole: legalRepresentativeRole!,
            ContactNumberOrAddress: contactNumberOrAddress!
          }
    );
  }
}
