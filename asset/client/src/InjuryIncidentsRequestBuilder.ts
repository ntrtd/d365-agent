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
import { InjuryIncidents } from './InjuryIncidents';

/**
 * Request builder class for operations supported on the {@link InjuryIncidents} entity.
 */
export class InjuryIncidentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InjuryIncidents<T>, T> {
  /**
   * Returns a request builder for querying all `InjuryIncidents` entities.
   * @returns A request builder for creating requests to retrieve all `InjuryIncidents` entities.
   */
  getAll(): GetAllRequestBuilder<InjuryIncidents<T>, T> {
    return new GetAllRequestBuilder<InjuryIncidents<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InjuryIncidents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InjuryIncidents`.
   */
  create(
    entity: InjuryIncidents<T>
  ): CreateRequestBuilder<InjuryIncidents<T>, T> {
    return new CreateRequestBuilder<InjuryIncidents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InjuryIncidents` entity based on its keys.
   * @param dataAreaId Key property. See {@link InjuryIncidents.dataAreaId}.
   * @param caseNumber Key property. See {@link InjuryIncidents.caseNumber}.
   * @returns A request builder for creating requests to retrieve one `InjuryIncidents` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    caseNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InjuryIncidents<T>, T> {
    return new GetByKeyRequestBuilder<InjuryIncidents<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CaseNumber: caseNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InjuryIncidents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InjuryIncidents`.
   */
  update(
    entity: InjuryIncidents<T>
  ): UpdateRequestBuilder<InjuryIncidents<T>, T> {
    return new UpdateRequestBuilder<InjuryIncidents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InjuryIncidents`.
   * @param dataAreaId Key property. See {@link InjuryIncidents.dataAreaId}.
   * @param caseNumber Key property. See {@link InjuryIncidents.caseNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InjuryIncidents`.
   */
  delete(
    dataAreaId: string,
    caseNumber: string
  ): DeleteRequestBuilder<InjuryIncidents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InjuryIncidents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InjuryIncidents` by taking the entity as a parameter.
   */
  delete(
    entity: InjuryIncidents<T>
  ): DeleteRequestBuilder<InjuryIncidents<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    caseNumber?: string
  ): DeleteRequestBuilder<InjuryIncidents<T>, T> {
    return new DeleteRequestBuilder<InjuryIncidents<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InjuryIncidents
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CaseNumber: caseNumber!
          }
    );
  }
}
