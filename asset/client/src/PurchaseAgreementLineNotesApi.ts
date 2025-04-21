/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseAgreementLineNotes } from './PurchaseAgreementLineNotes';
import { PurchaseAgreementLineNotesRequestBuilder } from './PurchaseAgreementLineNotesRequestBuilder';
import { PurchaseAgreementLinesApi } from './PurchaseAgreementLinesApi';
import { PurchaseAgreementLinesV2Api } from './PurchaseAgreementLinesV2Api';
import { DocuRestriction } from './DocuRestriction';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PurchaseAgreementLineNotesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PurchaseAgreementLineNotes<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): PurchaseAgreementLineNotesApi<DeSerializersT> {
    return new PurchaseAgreementLineNotesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link purchaseAgreementLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINE: OneToOneLink<
      PurchaseAgreementLineNotes<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseAgreementLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINE_V_2: OneToOneLink<
      PurchaseAgreementLineNotes<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseAgreementLinesApi<DeSerializersT>,
      PurchaseAgreementLinesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_AGREEMENT_LINE: new OneToOneLink(
        'PurchaseAgreementLine',
        this,
        linkedApis[0]
      ),
      PURCHASE_AGREEMENT_LINE_V_2: new OneToOneLink(
        'PurchaseAgreementLineV2',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = PurchaseAgreementLineNotes;

  requestBuilder(): PurchaseAgreementLineNotesRequestBuilder<DeSerializersT> {
    return new PurchaseAgreementLineNotesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PurchaseAgreementLineNotes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseAgreementLineNotes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseAgreementLineNotes<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof PurchaseAgreementLineNotes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseAgreementLineNotes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchaseAgreementLineNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_AGREEMENT_ID: OrderableEdmTypeField<
      PurchaseAgreementLineNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      PurchaseAgreementLineNotes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOCUMENT_ATTACHMENT_TYPE_CODE: OrderableEdmTypeField<
      PurchaseAgreementLineNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTACHMENT_DESCRIPTION: OrderableEdmTypeField<
      PurchaseAgreementLineNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTACHED_DATE_TIME: OrderableEdmTypeField<
      PurchaseAgreementLineNotes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACCESS_RESTRICTION: EnumField<
      PurchaseAgreementLineNotes<DeSerializers>,
      DeSerializersT,
      DocuRestriction,
      true,
      true
    >;
    ATTACHING_USER_ID: OrderableEdmTypeField<
      PurchaseAgreementLineNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_AGREEMENT_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      PurchaseAgreementLineNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      PurchaseAgreementLineNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseAgreementLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINE: OneToOneLink<
      PurchaseAgreementLineNotes<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseAgreementLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINE_V_2: OneToOneLink<
      PurchaseAgreementLineNotes<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PurchaseAgreementLineNotes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchaseAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseAgreementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link documentAttachmentTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ATTACHMENT_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'DocumentAttachmentTypeCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link attachmentDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AttachmentDescription',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link attachedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'AttachedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link accessRestriction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCESS_RESTRICTION: fieldBuilder.buildEnumField(
          'AccessRestriction',
          DocuRestriction,
          true
        ),
        /**
         * Static representation of the {@link attachingUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHING_USER_ID: fieldBuilder.buildEdmTypeField(
          'AttachingUserId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseAgreementLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_AGREEMENT_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseAgreementLegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PurchaseAgreementLineNotes)
      };
    }

    return this._schema;
  }
}
