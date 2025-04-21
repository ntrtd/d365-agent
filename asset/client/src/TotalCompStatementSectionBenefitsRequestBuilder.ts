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
import { TotalCompStatementSectionBenefits } from './TotalCompStatementSectionBenefits';

/**
 * Request builder class for operations supported on the {@link TotalCompStatementSectionBenefits} entity.
 */
export class TotalCompStatementSectionBenefitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TotalCompStatementSectionBenefits<T>, T> {
  /**
   * Returns a request builder for querying all `TotalCompStatementSectionBenefits` entities.
   * @returns A request builder for creating requests to retrieve all `TotalCompStatementSectionBenefits` entities.
   */
  getAll(): GetAllRequestBuilder<TotalCompStatementSectionBenefits<T>, T> {
    return new GetAllRequestBuilder<TotalCompStatementSectionBenefits<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TotalCompStatementSectionBenefits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TotalCompStatementSectionBenefits`.
   */
  create(
    entity: TotalCompStatementSectionBenefits<T>
  ): CreateRequestBuilder<TotalCompStatementSectionBenefits<T>, T> {
    return new CreateRequestBuilder<TotalCompStatementSectionBenefits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TotalCompStatementSectionBenefits` entity based on its keys.
   * @param statementSectionId Key property. See {@link TotalCompStatementSectionBenefits.statementSectionId}.
   * @param benefitId Key property. See {@link TotalCompStatementSectionBenefits.benefitId}.
   * @returns A request builder for creating requests to retrieve one `TotalCompStatementSectionBenefits` entity based on its keys.
   */
  getByKey(
    statementSectionId: DeserializedType<T, 'Edm.String'>,
    benefitId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TotalCompStatementSectionBenefits<T>, T> {
    return new GetByKeyRequestBuilder<TotalCompStatementSectionBenefits<T>, T>(
      this.entityApi,
      {
        StatementSectionId: statementSectionId,
        BenefitId: benefitId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TotalCompStatementSectionBenefits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TotalCompStatementSectionBenefits`.
   */
  update(
    entity: TotalCompStatementSectionBenefits<T>
  ): UpdateRequestBuilder<TotalCompStatementSectionBenefits<T>, T> {
    return new UpdateRequestBuilder<TotalCompStatementSectionBenefits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TotalCompStatementSectionBenefits`.
   * @param statementSectionId Key property. See {@link TotalCompStatementSectionBenefits.statementSectionId}.
   * @param benefitId Key property. See {@link TotalCompStatementSectionBenefits.benefitId}.
   * @returns A request builder for creating requests that delete an entity of type `TotalCompStatementSectionBenefits`.
   */
  delete(
    statementSectionId: string,
    benefitId: string
  ): DeleteRequestBuilder<TotalCompStatementSectionBenefits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TotalCompStatementSectionBenefits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TotalCompStatementSectionBenefits` by taking the entity as a parameter.
   */
  delete(
    entity: TotalCompStatementSectionBenefits<T>
  ): DeleteRequestBuilder<TotalCompStatementSectionBenefits<T>, T>;
  delete(
    statementSectionIdOrEntity: any,
    benefitId?: string
  ): DeleteRequestBuilder<TotalCompStatementSectionBenefits<T>, T> {
    return new DeleteRequestBuilder<TotalCompStatementSectionBenefits<T>, T>(
      this.entityApi,
      statementSectionIdOrEntity instanceof TotalCompStatementSectionBenefits
        ? statementSectionIdOrEntity
        : {
            StatementSectionId: statementSectionIdOrEntity!,
            BenefitId: benefitId!
          }
    );
  }
}
