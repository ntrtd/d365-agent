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
import { InjuryIncidentCostTypes } from './InjuryIncidentCostTypes';

/**
 * Request builder class for operations supported on the {@link InjuryIncidentCostTypes} entity.
 */
export class InjuryIncidentCostTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InjuryIncidentCostTypes<T>, T> {
  /**
   * Returns a request builder for querying all `InjuryIncidentCostTypes` entities.
   * @returns A request builder for creating requests to retrieve all `InjuryIncidentCostTypes` entities.
   */
  getAll(): GetAllRequestBuilder<InjuryIncidentCostTypes<T>, T> {
    return new GetAllRequestBuilder<InjuryIncidentCostTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InjuryIncidentCostTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InjuryIncidentCostTypes`.
   */
  create(
    entity: InjuryIncidentCostTypes<T>
  ): CreateRequestBuilder<InjuryIncidentCostTypes<T>, T> {
    return new CreateRequestBuilder<InjuryIncidentCostTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InjuryIncidentCostTypes` entity based on its keys.
   * @param caseNumber Key property. See {@link InjuryIncidentCostTypes.caseNumber}.
   * @param lineNum Key property. See {@link InjuryIncidentCostTypes.lineNum}.
   * @returns A request builder for creating requests to retrieve one `InjuryIncidentCostTypes` entity based on its keys.
   */
  getByKey(
    caseNumber: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<InjuryIncidentCostTypes<T>, T> {
    return new GetByKeyRequestBuilder<InjuryIncidentCostTypes<T>, T>(
      this.entityApi,
      {
        CaseNumber: caseNumber,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InjuryIncidentCostTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InjuryIncidentCostTypes`.
   */
  update(
    entity: InjuryIncidentCostTypes<T>
  ): UpdateRequestBuilder<InjuryIncidentCostTypes<T>, T> {
    return new UpdateRequestBuilder<InjuryIncidentCostTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InjuryIncidentCostTypes`.
   * @param caseNumber Key property. See {@link InjuryIncidentCostTypes.caseNumber}.
   * @param lineNum Key property. See {@link InjuryIncidentCostTypes.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `InjuryIncidentCostTypes`.
   */
  delete(
    caseNumber: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<InjuryIncidentCostTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InjuryIncidentCostTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InjuryIncidentCostTypes` by taking the entity as a parameter.
   */
  delete(
    entity: InjuryIncidentCostTypes<T>
  ): DeleteRequestBuilder<InjuryIncidentCostTypes<T>, T>;
  delete(
    caseNumberOrEntity: any,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<InjuryIncidentCostTypes<T>, T> {
    return new DeleteRequestBuilder<InjuryIncidentCostTypes<T>, T>(
      this.entityApi,
      caseNumberOrEntity instanceof InjuryIncidentCostTypes
        ? caseNumberOrEntity
        : {
            CaseNumber: caseNumberOrEntity!,
            LineNum: lineNum!
          }
    );
  }
}
