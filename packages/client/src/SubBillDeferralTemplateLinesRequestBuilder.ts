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
import { SubBillDeferralTemplateLines } from './SubBillDeferralTemplateLines';

/**
 * Request builder class for operations supported on the {@link SubBillDeferralTemplateLines} entity.
 */
export class SubBillDeferralTemplateLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDeferralTemplateLines<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDeferralTemplateLines` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDeferralTemplateLines` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillDeferralTemplateLines<T>, T> {
    return new GetAllRequestBuilder<SubBillDeferralTemplateLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillDeferralTemplateLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDeferralTemplateLines`.
   */
  create(
    entity: SubBillDeferralTemplateLines<T>
  ): CreateRequestBuilder<SubBillDeferralTemplateLines<T>, T> {
    return new CreateRequestBuilder<SubBillDeferralTemplateLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillDeferralTemplateLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDeferralTemplateLines.dataAreaId}.
   * @param template Key property. See {@link SubBillDeferralTemplateLines.template}.
   * @param lineNum Key property. See {@link SubBillDeferralTemplateLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `SubBillDeferralTemplateLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    template: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SubBillDeferralTemplateLines<T>, T> {
    return new GetByKeyRequestBuilder<SubBillDeferralTemplateLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Template: template,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDeferralTemplateLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDeferralTemplateLines`.
   */
  update(
    entity: SubBillDeferralTemplateLines<T>
  ): UpdateRequestBuilder<SubBillDeferralTemplateLines<T>, T> {
    return new UpdateRequestBuilder<SubBillDeferralTemplateLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralTemplateLines`.
   * @param dataAreaId Key property. See {@link SubBillDeferralTemplateLines.dataAreaId}.
   * @param template Key property. See {@link SubBillDeferralTemplateLines.template}.
   * @param lineNum Key property. See {@link SubBillDeferralTemplateLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralTemplateLines`.
   */
  delete(
    dataAreaId: string,
    template: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<SubBillDeferralTemplateLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralTemplateLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralTemplateLines` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDeferralTemplateLines<T>
  ): DeleteRequestBuilder<SubBillDeferralTemplateLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    template?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<SubBillDeferralTemplateLines<T>, T> {
    return new DeleteRequestBuilder<SubBillDeferralTemplateLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDeferralTemplateLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Template: template!,
            LineNum: lineNum!
          }
    );
  }
}
