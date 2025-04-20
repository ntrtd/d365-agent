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
import { ExpCopilotAutomationReports } from './ExpCopilotAutomationReports';

/**
 * Request builder class for operations supported on the {@link ExpCopilotAutomationReports} entity.
 */
export class ExpCopilotAutomationReportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpCopilotAutomationReports<T>, T> {
  /**
   * Returns a request builder for querying all `ExpCopilotAutomationReports` entities.
   * @returns A request builder for creating requests to retrieve all `ExpCopilotAutomationReports` entities.
   */
  getAll(): GetAllRequestBuilder<ExpCopilotAutomationReports<T>, T> {
    return new GetAllRequestBuilder<ExpCopilotAutomationReports<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpCopilotAutomationReports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpCopilotAutomationReports`.
   */
  create(
    entity: ExpCopilotAutomationReports<T>
  ): CreateRequestBuilder<ExpCopilotAutomationReports<T>, T> {
    return new CreateRequestBuilder<ExpCopilotAutomationReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpCopilotAutomationReports` entity based on its keys.
   * @param expNumber Key property. See {@link ExpCopilotAutomationReports.expNumber}.
   * @param legalEntityDataArea Key property. See {@link ExpCopilotAutomationReports.legalEntityDataArea}.
   * @returns A request builder for creating requests to retrieve one `ExpCopilotAutomationReports` entity based on its keys.
   */
  getByKey(
    expNumber: DeserializedType<T, 'Edm.String'>,
    legalEntityDataArea: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpCopilotAutomationReports<T>, T> {
    return new GetByKeyRequestBuilder<ExpCopilotAutomationReports<T>, T>(
      this.entityApi,
      {
        ExpNumber: expNumber,
        LegalEntity_DataArea: legalEntityDataArea
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpCopilotAutomationReports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpCopilotAutomationReports`.
   */
  update(
    entity: ExpCopilotAutomationReports<T>
  ): UpdateRequestBuilder<ExpCopilotAutomationReports<T>, T> {
    return new UpdateRequestBuilder<ExpCopilotAutomationReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpCopilotAutomationReports`.
   * @param expNumber Key property. See {@link ExpCopilotAutomationReports.expNumber}.
   * @param legalEntityDataArea Key property. See {@link ExpCopilotAutomationReports.legalEntityDataArea}.
   * @returns A request builder for creating requests that delete an entity of type `ExpCopilotAutomationReports`.
   */
  delete(
    expNumber: string,
    legalEntityDataArea: string
  ): DeleteRequestBuilder<ExpCopilotAutomationReports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpCopilotAutomationReports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpCopilotAutomationReports` by taking the entity as a parameter.
   */
  delete(
    entity: ExpCopilotAutomationReports<T>
  ): DeleteRequestBuilder<ExpCopilotAutomationReports<T>, T>;
  delete(
    expNumberOrEntity: any,
    legalEntityDataArea?: string
  ): DeleteRequestBuilder<ExpCopilotAutomationReports<T>, T> {
    return new DeleteRequestBuilder<ExpCopilotAutomationReports<T>, T>(
      this.entityApi,
      expNumberOrEntity instanceof ExpCopilotAutomationReports
        ? expNumberOrEntity
        : {
            ExpNumber: expNumberOrEntity!,
            LegalEntity_DataArea: legalEntityDataArea!
          }
    );
  }
}
