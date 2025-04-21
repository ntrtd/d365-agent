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
import { RequestForQuotationReplyScoringCriteria } from './RequestForQuotationReplyScoringCriteria';

/**
 * Request builder class for operations supported on the {@link RequestForQuotationReplyScoringCriteria} entity.
 */
export class RequestForQuotationReplyScoringCriteriaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RequestForQuotationReplyScoringCriteria<T>, T> {
  /**
   * Returns a request builder for querying all `RequestForQuotationReplyScoringCriteria` entities.
   * @returns A request builder for creating requests to retrieve all `RequestForQuotationReplyScoringCriteria` entities.
   */
  getAll(): GetAllRequestBuilder<
    RequestForQuotationReplyScoringCriteria<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RequestForQuotationReplyScoringCriteria<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RequestForQuotationReplyScoringCriteria` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RequestForQuotationReplyScoringCriteria`.
   */
  create(
    entity: RequestForQuotationReplyScoringCriteria<T>
  ): CreateRequestBuilder<RequestForQuotationReplyScoringCriteria<T>, T> {
    return new CreateRequestBuilder<
      RequestForQuotationReplyScoringCriteria<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RequestForQuotationReplyScoringCriteria` entity based on its keys.
   * @param dataAreaId Key property. See {@link RequestForQuotationReplyScoringCriteria.dataAreaId}.
   * @param rfqNumber Key property. See {@link RequestForQuotationReplyScoringCriteria.rfqNumber}.
   * @param criterionId Key property. See {@link RequestForQuotationReplyScoringCriteria.criterionId}.
   * @returns A request builder for creating requests to retrieve one `RequestForQuotationReplyScoringCriteria` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rfqNumber: DeserializedType<T, 'Edm.String'>,
    criterionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RequestForQuotationReplyScoringCriteria<T>, T> {
    return new GetByKeyRequestBuilder<
      RequestForQuotationReplyScoringCriteria<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RFQNumber: rfqNumber,
      CriterionId: criterionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RequestForQuotationReplyScoringCriteria`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RequestForQuotationReplyScoringCriteria`.
   */
  update(
    entity: RequestForQuotationReplyScoringCriteria<T>
  ): UpdateRequestBuilder<RequestForQuotationReplyScoringCriteria<T>, T> {
    return new UpdateRequestBuilder<
      RequestForQuotationReplyScoringCriteria<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RequestForQuotationReplyScoringCriteria`.
   * @param dataAreaId Key property. See {@link RequestForQuotationReplyScoringCriteria.dataAreaId}.
   * @param rfqNumber Key property. See {@link RequestForQuotationReplyScoringCriteria.rfqNumber}.
   * @param criterionId Key property. See {@link RequestForQuotationReplyScoringCriteria.criterionId}.
   * @returns A request builder for creating requests that delete an entity of type `RequestForQuotationReplyScoringCriteria`.
   */
  delete(
    dataAreaId: string,
    rfqNumber: string,
    criterionId: string
  ): DeleteRequestBuilder<RequestForQuotationReplyScoringCriteria<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RequestForQuotationReplyScoringCriteria`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RequestForQuotationReplyScoringCriteria` by taking the entity as a parameter.
   */
  delete(
    entity: RequestForQuotationReplyScoringCriteria<T>
  ): DeleteRequestBuilder<RequestForQuotationReplyScoringCriteria<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rfqNumber?: string,
    criterionId?: string
  ): DeleteRequestBuilder<RequestForQuotationReplyScoringCriteria<T>, T> {
    return new DeleteRequestBuilder<
      RequestForQuotationReplyScoringCriteria<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RequestForQuotationReplyScoringCriteria
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RFQNumber: rfqNumber!,
            CriterionId: criterionId!
          }
    );
  }
}
