/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { InjuryIncidentTreatments } from './InjuryIncidentTreatments';

/**
 * Request builder class for operations supported on the {@link InjuryIncidentTreatments} entity.
 */
export class InjuryIncidentTreatmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InjuryIncidentTreatments<T>, T> {
  /**
   * Returns a request builder for querying all `InjuryIncidentTreatments` entities.
   * @returns A request builder for creating requests to retrieve all `InjuryIncidentTreatments` entities.
   */
  getAll(): GetAllRequestBuilder<InjuryIncidentTreatments<T>, T> {
    return new GetAllRequestBuilder<InjuryIncidentTreatments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InjuryIncidentTreatments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InjuryIncidentTreatments`.
   */
  create(
    entity: InjuryIncidentTreatments<T>
  ): CreateRequestBuilder<InjuryIncidentTreatments<T>, T> {
    return new CreateRequestBuilder<InjuryIncidentTreatments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InjuryIncidentTreatments` entity based on its keys.
   * @param caseNumber Key property. See {@link InjuryIncidentTreatments.caseNumber}.
   * @param lineNum Key property. See {@link InjuryIncidentTreatments.lineNum}.
   * @returns A request builder for creating requests to retrieve one `InjuryIncidentTreatments` entity based on its keys.
   */
  getByKey(
    caseNumber: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<InjuryIncidentTreatments<T>, T> {
    return new GetByKeyRequestBuilder<InjuryIncidentTreatments<T>, T>(
      this.entityApi,
      {
        CaseNumber: caseNumber,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InjuryIncidentTreatments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InjuryIncidentTreatments`.
   */
  update(
    entity: InjuryIncidentTreatments<T>
  ): UpdateRequestBuilder<InjuryIncidentTreatments<T>, T> {
    return new UpdateRequestBuilder<InjuryIncidentTreatments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InjuryIncidentTreatments`.
   * @param caseNumber Key property. See {@link InjuryIncidentTreatments.caseNumber}.
   * @param lineNum Key property. See {@link InjuryIncidentTreatments.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `InjuryIncidentTreatments`.
   */
  delete(
    caseNumber: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<InjuryIncidentTreatments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InjuryIncidentTreatments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InjuryIncidentTreatments` by taking the entity as a parameter.
   */
  delete(
    entity: InjuryIncidentTreatments<T>
  ): DeleteRequestBuilder<InjuryIncidentTreatments<T>, T>;
  delete(
    caseNumberOrEntity: any,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<InjuryIncidentTreatments<T>, T> {
    return new DeleteRequestBuilder<InjuryIncidentTreatments<T>, T>(
      this.entityApi,
      caseNumberOrEntity instanceof InjuryIncidentTreatments
        ? caseNumberOrEntity
        : {
            CaseNumber: caseNumberOrEntity!,
            LineNum: lineNum!
          }
    );
  }
}
