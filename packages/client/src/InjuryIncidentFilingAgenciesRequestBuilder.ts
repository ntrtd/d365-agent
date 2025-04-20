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
import { InjuryIncidentFilingAgencies } from './InjuryIncidentFilingAgencies';

/**
 * Request builder class for operations supported on the {@link InjuryIncidentFilingAgencies} entity.
 */
export class InjuryIncidentFilingAgenciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InjuryIncidentFilingAgencies<T>, T> {
  /**
   * Returns a request builder for querying all `InjuryIncidentFilingAgencies` entities.
   * @returns A request builder for creating requests to retrieve all `InjuryIncidentFilingAgencies` entities.
   */
  getAll(): GetAllRequestBuilder<InjuryIncidentFilingAgencies<T>, T> {
    return new GetAllRequestBuilder<InjuryIncidentFilingAgencies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InjuryIncidentFilingAgencies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InjuryIncidentFilingAgencies`.
   */
  create(
    entity: InjuryIncidentFilingAgencies<T>
  ): CreateRequestBuilder<InjuryIncidentFilingAgencies<T>, T> {
    return new CreateRequestBuilder<InjuryIncidentFilingAgencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InjuryIncidentFilingAgencies` entity based on its keys.
   * @param caseNumber Key property. See {@link InjuryIncidentFilingAgencies.caseNumber}.
   * @param filingAgencyId Key property. See {@link InjuryIncidentFilingAgencies.filingAgencyId}.
   * @returns A request builder for creating requests to retrieve one `InjuryIncidentFilingAgencies` entity based on its keys.
   */
  getByKey(
    caseNumber: DeserializedType<T, 'Edm.String'>,
    filingAgencyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InjuryIncidentFilingAgencies<T>, T> {
    return new GetByKeyRequestBuilder<InjuryIncidentFilingAgencies<T>, T>(
      this.entityApi,
      {
        CaseNumber: caseNumber,
        FilingAgencyId: filingAgencyId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InjuryIncidentFilingAgencies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InjuryIncidentFilingAgencies`.
   */
  update(
    entity: InjuryIncidentFilingAgencies<T>
  ): UpdateRequestBuilder<InjuryIncidentFilingAgencies<T>, T> {
    return new UpdateRequestBuilder<InjuryIncidentFilingAgencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InjuryIncidentFilingAgencies`.
   * @param caseNumber Key property. See {@link InjuryIncidentFilingAgencies.caseNumber}.
   * @param filingAgencyId Key property. See {@link InjuryIncidentFilingAgencies.filingAgencyId}.
   * @returns A request builder for creating requests that delete an entity of type `InjuryIncidentFilingAgencies`.
   */
  delete(
    caseNumber: string,
    filingAgencyId: string
  ): DeleteRequestBuilder<InjuryIncidentFilingAgencies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InjuryIncidentFilingAgencies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InjuryIncidentFilingAgencies` by taking the entity as a parameter.
   */
  delete(
    entity: InjuryIncidentFilingAgencies<T>
  ): DeleteRequestBuilder<InjuryIncidentFilingAgencies<T>, T>;
  delete(
    caseNumberOrEntity: any,
    filingAgencyId?: string
  ): DeleteRequestBuilder<InjuryIncidentFilingAgencies<T>, T> {
    return new DeleteRequestBuilder<InjuryIncidentFilingAgencies<T>, T>(
      this.entityApi,
      caseNumberOrEntity instanceof InjuryIncidentFilingAgencies
        ? caseNumberOrEntity
        : {
            CaseNumber: caseNumberOrEntity!,
            FilingAgencyId: filingAgencyId!
          }
    );
  }
}
