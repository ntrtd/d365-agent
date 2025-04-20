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
import { LegalRepresentatives } from './LegalRepresentatives';
import { LegalRepresentativeTypeBr } from './LegalRepresentativeTypeBr';

/**
 * Request builder class for operations supported on the {@link LegalRepresentatives} entity.
 */
export class LegalRepresentativesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LegalRepresentatives<T>, T> {
  /**
   * Returns a request builder for querying all `LegalRepresentatives` entities.
   * @returns A request builder for creating requests to retrieve all `LegalRepresentatives` entities.
   */
  getAll(): GetAllRequestBuilder<LegalRepresentatives<T>, T> {
    return new GetAllRequestBuilder<LegalRepresentatives<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LegalRepresentatives` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LegalRepresentatives`.
   */
  create(
    entity: LegalRepresentatives<T>
  ): CreateRequestBuilder<LegalRepresentatives<T>, T> {
    return new CreateRequestBuilder<LegalRepresentatives<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LegalRepresentatives` entity based on its keys.
   * @param cpf Key property. See {@link LegalRepresentatives.cpf}.
   * @param fiscalOrganizationRootFiscalEstablishment Key property. See {@link LegalRepresentatives.fiscalOrganizationRootFiscalEstablishment}.
   * @param fiscalOrganizationRootFiscalEstablishmentDataArea Key property. See {@link LegalRepresentatives.fiscalOrganizationRootFiscalEstablishmentDataArea}.
   * @param role Key property. See {@link LegalRepresentatives.role}.
   * @returns A request builder for creating requests to retrieve one `LegalRepresentatives` entity based on its keys.
   */
  getByKey(
    cpf: DeserializedType<T, 'Edm.String'>,
    fiscalOrganizationRootFiscalEstablishment: DeserializedType<
      T,
      'Edm.String'
    >,
    fiscalOrganizationRootFiscalEstablishmentDataArea: DeserializedType<
      T,
      'Edm.String'
    >,
    role: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LegalRepresentativeType_BR'
    >
  ): GetByKeyRequestBuilder<LegalRepresentatives<T>, T> {
    return new GetByKeyRequestBuilder<LegalRepresentatives<T>, T>(
      this.entityApi,
      {
        CPF: cpf,
        FiscalOrganizationRootFiscalEstablishment:
          fiscalOrganizationRootFiscalEstablishment,
        FiscalOrganizationRootFiscalEstablishmentDataArea:
          fiscalOrganizationRootFiscalEstablishmentDataArea,
        Role: role
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LegalRepresentatives`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LegalRepresentatives`.
   */
  update(
    entity: LegalRepresentatives<T>
  ): UpdateRequestBuilder<LegalRepresentatives<T>, T> {
    return new UpdateRequestBuilder<LegalRepresentatives<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LegalRepresentatives`.
   * @param cpf Key property. See {@link LegalRepresentatives.cpf}.
   * @param fiscalOrganizationRootFiscalEstablishment Key property. See {@link LegalRepresentatives.fiscalOrganizationRootFiscalEstablishment}.
   * @param fiscalOrganizationRootFiscalEstablishmentDataArea Key property. See {@link LegalRepresentatives.fiscalOrganizationRootFiscalEstablishmentDataArea}.
   * @param role Key property. See {@link LegalRepresentatives.role}.
   * @returns A request builder for creating requests that delete an entity of type `LegalRepresentatives`.
   */
  delete(
    cpf: string,
    fiscalOrganizationRootFiscalEstablishment: string,
    fiscalOrganizationRootFiscalEstablishmentDataArea: string,
    role: LegalRepresentativeTypeBr
  ): DeleteRequestBuilder<LegalRepresentatives<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LegalRepresentatives`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LegalRepresentatives` by taking the entity as a parameter.
   */
  delete(
    entity: LegalRepresentatives<T>
  ): DeleteRequestBuilder<LegalRepresentatives<T>, T>;
  delete(
    cpfOrEntity: any,
    fiscalOrganizationRootFiscalEstablishment?: string,
    fiscalOrganizationRootFiscalEstablishmentDataArea?: string,
    role?: LegalRepresentativeTypeBr
  ): DeleteRequestBuilder<LegalRepresentatives<T>, T> {
    return new DeleteRequestBuilder<LegalRepresentatives<T>, T>(
      this.entityApi,
      cpfOrEntity instanceof LegalRepresentatives
        ? cpfOrEntity
        : {
            CPF: cpfOrEntity!,
            FiscalOrganizationRootFiscalEstablishment:
              fiscalOrganizationRootFiscalEstablishment!,
            FiscalOrganizationRootFiscalEstablishmentDataArea:
              fiscalOrganizationRootFiscalEstablishmentDataArea!,
            Role: role!
          }
    );
  }
}
