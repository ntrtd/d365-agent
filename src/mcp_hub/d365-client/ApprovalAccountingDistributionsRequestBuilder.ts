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
import { ApprovalAccountingDistributions } from './ApprovalAccountingDistributions';

/**
 * Request builder class for operations supported on the {@link ApprovalAccountingDistributions} entity.
 */
export class ApprovalAccountingDistributionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApprovalAccountingDistributions<T>, T> {
  /**
   * Returns a request builder for querying all `ApprovalAccountingDistributions` entities.
   * @returns A request builder for creating requests to retrieve all `ApprovalAccountingDistributions` entities.
   */
  getAll(): GetAllRequestBuilder<ApprovalAccountingDistributions<T>, T> {
    return new GetAllRequestBuilder<ApprovalAccountingDistributions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ApprovalAccountingDistributions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApprovalAccountingDistributions`.
   */
  create(
    entity: ApprovalAccountingDistributions<T>
  ): CreateRequestBuilder<ApprovalAccountingDistributions<T>, T> {
    return new CreateRequestBuilder<ApprovalAccountingDistributions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApprovalAccountingDistributions` entity based on its keys.
   * @param sourceDocumentLine Key property. See {@link ApprovalAccountingDistributions.sourceDocumentLine}.
   * @param distributionNumber Key property. See {@link ApprovalAccountingDistributions.distributionNumber}.
   * @param workItemRecId Key property. See {@link ApprovalAccountingDistributions.workItemRecId}.
   * @returns A request builder for creating requests to retrieve one `ApprovalAccountingDistributions` entity based on its keys.
   */
  getByKey(
    sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>,
    distributionNumber: DeserializedType<T, 'Edm.Int64'>,
    workItemRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ApprovalAccountingDistributions<T>, T> {
    return new GetByKeyRequestBuilder<ApprovalAccountingDistributions<T>, T>(
      this.entityApi,
      {
        SourceDocumentLine: sourceDocumentLine,
        DistributionNumber: distributionNumber,
        WorkItemRecId: workItemRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApprovalAccountingDistributions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApprovalAccountingDistributions`.
   */
  update(
    entity: ApprovalAccountingDistributions<T>
  ): UpdateRequestBuilder<ApprovalAccountingDistributions<T>, T> {
    return new UpdateRequestBuilder<ApprovalAccountingDistributions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApprovalAccountingDistributions`.
   * @param sourceDocumentLine Key property. See {@link ApprovalAccountingDistributions.sourceDocumentLine}.
   * @param distributionNumber Key property. See {@link ApprovalAccountingDistributions.distributionNumber}.
   * @param workItemRecId Key property. See {@link ApprovalAccountingDistributions.workItemRecId}.
   * @returns A request builder for creating requests that delete an entity of type `ApprovalAccountingDistributions`.
   */
  delete(
    sourceDocumentLine: BigNumber,
    distributionNumber: BigNumber,
    workItemRecId: BigNumber
  ): DeleteRequestBuilder<ApprovalAccountingDistributions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApprovalAccountingDistributions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApprovalAccountingDistributions` by taking the entity as a parameter.
   */
  delete(
    entity: ApprovalAccountingDistributions<T>
  ): DeleteRequestBuilder<ApprovalAccountingDistributions<T>, T>;
  delete(
    sourceDocumentLineOrEntity: any,
    distributionNumber?: BigNumber,
    workItemRecId?: BigNumber
  ): DeleteRequestBuilder<ApprovalAccountingDistributions<T>, T> {
    return new DeleteRequestBuilder<ApprovalAccountingDistributions<T>, T>(
      this.entityApi,
      sourceDocumentLineOrEntity instanceof ApprovalAccountingDistributions
        ? sourceDocumentLineOrEntity
        : {
            SourceDocumentLine: sourceDocumentLineOrEntity!,
            DistributionNumber: distributionNumber!,
            WorkItemRecId: workItemRecId!
          }
    );
  }
}
