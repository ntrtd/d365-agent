/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmDocumentClassificationMasks } from './LtmDocumentClassificationMasks';
import { LtmDocumentClassificationMasksRequestBuilder } from './LtmDocumentClassificationMasksRequestBuilder';
import { NoYes } from './NoYes';
import { LtmAssignType } from './LtmAssignType';
import { LtmEntryType } from './LtmEntryType';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class LtmDocumentClassificationMasksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LtmDocumentClassificationMasks<DeSerializersT>, DeSerializersT>
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
  ): LtmDocumentClassificationMasksApi<DeSerializersT> {
    return new LtmDocumentClassificationMasksApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmDocumentClassificationMasks;

  requestBuilder(): LtmDocumentClassificationMasksRequestBuilder<DeSerializersT> {
    return new LtmDocumentClassificationMasksRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LtmDocumentClassificationMasks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LtmDocumentClassificationMasks<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmDocumentClassificationMasks<DeSerializersT>,
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
    typeof LtmDocumentClassificationMasks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmDocumentClassificationMasks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_CLASSIFICATION_ID: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MSK_BANK_POS_ENABLED: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_PROJ_DOC_NUM_MANDATORY: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_BANK_DOC_NUM_NO_VALIDATE_MASK: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_FA_DOC_NUM_ASSIGN_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmAssignType,
      true,
      true
    >;
    MSK_BANK_POS_ENTRY_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmEntryType,
      true,
      true
    >;
    MSK_GLPOS_MANDATORY: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_VEND_DOC_NUM_ASSIGN_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmAssignType,
      true,
      true
    >;
    MSK_CUST_POS_MASK: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MSK_GLPOS_MASK: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MSK_CUST_POS_MANDATORY: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_CUST_PRESERVE_ASSIGNED_NUM: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_INV_DOC_NUM_MASK: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MSK_INV_POS_LENGTH: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MSK_FA_DOC_NUM_MASK: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MSK_BANK_DOC_NUM_MASK: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MSK_VEND_POS_ENTRY_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmEntryType,
      true,
      true
    >;
    MSK_FAPOS_ENABLED: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_VEND_DOC_NUM_NO_VALIDATE_MASK: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_PROY_PRESERVE_ASSIGNED_NUM: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_VEND_DOC_NUM_MASK: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MSK_GL_DOC_NUM_ASSIGN_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmAssignType,
      true,
      true
    >;
    MSK_INV_DOC_NUM_ENTRY_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmEntryType,
      true,
      true
    >;
    MSK_CUST_DOC_NUM_ENTRY_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmEntryType,
      true,
      true
    >;
    MSK_PROJ_DOC_NUM_LENGTH: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MSK_CUST_DOC_NUM_ASSIGN_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmAssignType,
      true,
      true
    >;
    MSK_INV_DOC_NUM_NO_VALIDATE_MASK: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_VEND_DOC_NUM_ENTRY_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmEntryType,
      true,
      true
    >;
    MSK_FAPOS_MASK: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MSK_PROJ_POS_LENGTH: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MSK_FA_DOC_NUM_LENGTH: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MSK_PROJ_DOC_NUM_NO_VALIDATE_MASK: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_PROJ_DOC_NUM_ENTRY_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmEntryType,
      true,
      true
    >;
    MSK_BANK_POS_MANDATORY: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_GLPOS_LENGTH: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MSK_CUST_POS_LENGTH: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MSK_INV_PRESERVE_ASSIGNED_NUM: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_BANK_DOC_NUM_LENGTH: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MSK_FA_DOC_NUM_NO_VALIDATE_MASK: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_INV_DOC_NUM_MANDATORY: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_INV_POS_MASK: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MSK_GLPOS_ENABLED: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_VEND_POS_MASK: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MSK_VEND_PRESERVE_ASSIGNED_NUM: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_GLPOS_ENTRY_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmEntryType,
      true,
      true
    >;
    MSK_BANK_DOC_NUM_ENTRY_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmEntryType,
      true,
      true
    >;
    MSK_BANK_PRESERVE_ASSIGNED_NUM: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_INV_DOC_NUM_ASSIGN_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmAssignType,
      true,
      true
    >;
    MSK_VEND_POS_LENGTH: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MSK_INV_POS_ENTRY_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmEntryType,
      true,
      true
    >;
    MSK_CUST_DOC_NUM_MANDATORY: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_BANK_POS_LENGTH: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MSK_GL_DOC_NUM_NO_VALIDATE_MASK: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_PROJ_POS_ENABLED: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_INV_POS_MANDATORY: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_BANK_POS_MASK: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MSK_CUST_POS_ENABLED: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_FA_DOC_NUM_ENTRY_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmEntryType,
      true,
      true
    >;
    MSK_PROJ_POS_MASK: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MSK_CUST_DOC_NUM_LENGTH: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MSK_FAPOS_LENGTH: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MSK_PROJ_DOC_NUM_ASSIGN_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmAssignType,
      true,
      true
    >;
    MSK_BANK_DOC_NUM_ASSIGN_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmAssignType,
      true,
      true
    >;
    MSK_INV_POS_ENABLED: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_FAPOS_MANDATORY: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_PROJ_POS_MANDATORY: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_FAPOS_ENTRY_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmEntryType,
      true,
      true
    >;
    MSK_PROJ_POS_ENTRY_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmEntryType,
      true,
      true
    >;
    MSK_INV_DOC_NUM_LENGTH: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MSK_GL_DOC_NUM_LENGTH: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MSK_CUST_POS_ENTRY_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmEntryType,
      true,
      true
    >;
    MSK_VEND_DOC_NUM_MANDATORY: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_CUST_DOC_NUM_MASK: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MSK_VEND_POS_ENABLED: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_GL_DOC_NUM_MASK: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MSK_BANK_DOC_NUM_MANDATORY: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_VEND_POS_MANDATORY: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_GL_PRESERVE_ASSIGNED_NUM: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_CUST_DOC_NUM_NO_VALIDATE_MASK: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_GL_DOC_NUM_MANDATORY: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_FA_DOC_NUM_MANDATORY: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_PROJ_DOC_NUM_MASK: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MSK_GL_DOC_NUM_ENTRY_TYPE: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      LtmEntryType,
      true,
      true
    >;
    MSK_FA_PRESERVE_ASSIGNED_NUM: EnumField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_VEND_DOC_NUM_LENGTH: OrderableEdmTypeField<
      LtmDocumentClassificationMasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LtmDocumentClassificationMasks<DeSerializers>>;
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
         * Static representation of the {@link documentClassificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'DocumentClassificationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link mskBankPosEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_BANK_POS_ENABLED: fieldBuilder.buildEnumField(
          'MskBankPOSEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskProjDocNumMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_PROJ_DOC_NUM_MANDATORY: fieldBuilder.buildEnumField(
          'MskProjDocNumMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskBankDocNumNoValidateMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_BANK_DOC_NUM_NO_VALIDATE_MASK: fieldBuilder.buildEnumField(
          'MskBankDocNumNoValidateMask',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskFaDocNumAssignType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_FA_DOC_NUM_ASSIGN_TYPE: fieldBuilder.buildEnumField(
          'MskFADocNumAssignType',
          LtmAssignType,
          true
        ),
        /**
         * Static representation of the {@link mskBankPosEntryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_BANK_POS_ENTRY_TYPE: fieldBuilder.buildEnumField(
          'MskBankPOSEntryType',
          LtmEntryType,
          true
        ),
        /**
         * Static representation of the {@link mskGlposMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_GLPOS_MANDATORY: fieldBuilder.buildEnumField(
          'MskGLPOSMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskVendDocNumAssignType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_VEND_DOC_NUM_ASSIGN_TYPE: fieldBuilder.buildEnumField(
          'MskVendDocNumAssignType',
          LtmAssignType,
          true
        ),
        /**
         * Static representation of the {@link mskCustPosMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_CUST_POS_MASK: fieldBuilder.buildEdmTypeField(
          'MskCustPOSMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mskGlposMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_GLPOS_MASK: fieldBuilder.buildEdmTypeField(
          'MskGLPOSMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mskCustPosMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_CUST_POS_MANDATORY: fieldBuilder.buildEnumField(
          'MskCustPOSMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskCustPreserveAssignedNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_CUST_PRESERVE_ASSIGNED_NUM: fieldBuilder.buildEnumField(
          'MskCustPreserveAssignedNum',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskInvDocNumMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_INV_DOC_NUM_MASK: fieldBuilder.buildEdmTypeField(
          'MskInvDocNumMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mskInvPosLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_INV_POS_LENGTH: fieldBuilder.buildEdmTypeField(
          'MskInvPOSLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mskFaDocNumMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_FA_DOC_NUM_MASK: fieldBuilder.buildEdmTypeField(
          'MskFADocNumMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mskBankDocNumMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_BANK_DOC_NUM_MASK: fieldBuilder.buildEdmTypeField(
          'MskBankDocNumMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mskVendPosEntryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_VEND_POS_ENTRY_TYPE: fieldBuilder.buildEnumField(
          'MskVendPOSEntryType',
          LtmEntryType,
          true
        ),
        /**
         * Static representation of the {@link mskFaposEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_FAPOS_ENABLED: fieldBuilder.buildEnumField(
          'MskFAPOSEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskVendDocNumNoValidateMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_VEND_DOC_NUM_NO_VALIDATE_MASK: fieldBuilder.buildEnumField(
          'MskVendDocNumNoValidateMask',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskProyPreserveAssignedNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_PROY_PRESERVE_ASSIGNED_NUM: fieldBuilder.buildEnumField(
          'MskProyPreserveAssignedNum',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskVendDocNumMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_VEND_DOC_NUM_MASK: fieldBuilder.buildEdmTypeField(
          'MskVendDocNumMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mskGlDocNumAssignType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_GL_DOC_NUM_ASSIGN_TYPE: fieldBuilder.buildEnumField(
          'MskGLDocNumAssignType',
          LtmAssignType,
          true
        ),
        /**
         * Static representation of the {@link mskInvDocNumEntryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_INV_DOC_NUM_ENTRY_TYPE: fieldBuilder.buildEnumField(
          'MskInvDocNumEntryType',
          LtmEntryType,
          true
        ),
        /**
         * Static representation of the {@link mskCustDocNumEntryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_CUST_DOC_NUM_ENTRY_TYPE: fieldBuilder.buildEnumField(
          'MskCustDocNumEntryType',
          LtmEntryType,
          true
        ),
        /**
         * Static representation of the {@link mskProjDocNumLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_PROJ_DOC_NUM_LENGTH: fieldBuilder.buildEdmTypeField(
          'MskProjDocNumLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mskCustDocNumAssignType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_CUST_DOC_NUM_ASSIGN_TYPE: fieldBuilder.buildEnumField(
          'MskCustDocNumAssignType',
          LtmAssignType,
          true
        ),
        /**
         * Static representation of the {@link mskInvDocNumNoValidateMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_INV_DOC_NUM_NO_VALIDATE_MASK: fieldBuilder.buildEnumField(
          'MskInvDocNumNoValidateMask',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskVendDocNumEntryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_VEND_DOC_NUM_ENTRY_TYPE: fieldBuilder.buildEnumField(
          'MskVendDocNumEntryType',
          LtmEntryType,
          true
        ),
        /**
         * Static representation of the {@link mskFaposMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_FAPOS_MASK: fieldBuilder.buildEdmTypeField(
          'MskFAPOSMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mskProjPosLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_PROJ_POS_LENGTH: fieldBuilder.buildEdmTypeField(
          'MskProjPOSLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mskFaDocNumLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_FA_DOC_NUM_LENGTH: fieldBuilder.buildEdmTypeField(
          'MskFADocNumLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mskProjDocNumNoValidateMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_PROJ_DOC_NUM_NO_VALIDATE_MASK: fieldBuilder.buildEnumField(
          'MskProjDocNumNoValidateMask',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskProjDocNumEntryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_PROJ_DOC_NUM_ENTRY_TYPE: fieldBuilder.buildEnumField(
          'MskProjDocNumEntryType',
          LtmEntryType,
          true
        ),
        /**
         * Static representation of the {@link mskBankPosMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_BANK_POS_MANDATORY: fieldBuilder.buildEnumField(
          'MskBankPOSMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskGlposLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_GLPOS_LENGTH: fieldBuilder.buildEdmTypeField(
          'MskGLPOSLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mskCustPosLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_CUST_POS_LENGTH: fieldBuilder.buildEdmTypeField(
          'MskCustPOSLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mskInvPreserveAssignedNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_INV_PRESERVE_ASSIGNED_NUM: fieldBuilder.buildEnumField(
          'MskInvPreserveAssignedNum',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskBankDocNumLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_BANK_DOC_NUM_LENGTH: fieldBuilder.buildEdmTypeField(
          'MskBankDocNumLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mskFaDocNumNoValidateMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_FA_DOC_NUM_NO_VALIDATE_MASK: fieldBuilder.buildEnumField(
          'MskFADocNumNoValidateMask',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskInvDocNumMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_INV_DOC_NUM_MANDATORY: fieldBuilder.buildEnumField(
          'MskInvDocNumMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskInvPosMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_INV_POS_MASK: fieldBuilder.buildEdmTypeField(
          'MskInvPOSMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mskGlposEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_GLPOS_ENABLED: fieldBuilder.buildEnumField(
          'MskGLPOSEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskVendPosMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_VEND_POS_MASK: fieldBuilder.buildEdmTypeField(
          'MskVendPOSMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mskVendPreserveAssignedNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_VEND_PRESERVE_ASSIGNED_NUM: fieldBuilder.buildEnumField(
          'MskVendPreserveAssignedNum',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskGlposEntryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_GLPOS_ENTRY_TYPE: fieldBuilder.buildEnumField(
          'MskGLPOSEntryType',
          LtmEntryType,
          true
        ),
        /**
         * Static representation of the {@link mskBankDocNumEntryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_BANK_DOC_NUM_ENTRY_TYPE: fieldBuilder.buildEnumField(
          'MskBankDocNumEntryType',
          LtmEntryType,
          true
        ),
        /**
         * Static representation of the {@link mskBankPreserveAssignedNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_BANK_PRESERVE_ASSIGNED_NUM: fieldBuilder.buildEnumField(
          'MskBankPreserveAssignedNum',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskInvDocNumAssignType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_INV_DOC_NUM_ASSIGN_TYPE: fieldBuilder.buildEnumField(
          'MskInvDocNumAssignType',
          LtmAssignType,
          true
        ),
        /**
         * Static representation of the {@link mskVendPosLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_VEND_POS_LENGTH: fieldBuilder.buildEdmTypeField(
          'MskVendPOSLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mskInvPosEntryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_INV_POS_ENTRY_TYPE: fieldBuilder.buildEnumField(
          'MskInvPOSEntryType',
          LtmEntryType,
          true
        ),
        /**
         * Static representation of the {@link mskCustDocNumMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_CUST_DOC_NUM_MANDATORY: fieldBuilder.buildEnumField(
          'MskCustDocNumMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskBankPosLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_BANK_POS_LENGTH: fieldBuilder.buildEdmTypeField(
          'MskBankPOSLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mskGlDocNumNoValidateMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_GL_DOC_NUM_NO_VALIDATE_MASK: fieldBuilder.buildEnumField(
          'MskGLDocNumNoValidateMask',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskProjPosEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_PROJ_POS_ENABLED: fieldBuilder.buildEnumField(
          'MskProjPOSEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskInvPosMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_INV_POS_MANDATORY: fieldBuilder.buildEnumField(
          'MskInvPOSMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskBankPosMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_BANK_POS_MASK: fieldBuilder.buildEdmTypeField(
          'MskBankPOSMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mskCustPosEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_CUST_POS_ENABLED: fieldBuilder.buildEnumField(
          'MskCustPOSEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskFaDocNumEntryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_FA_DOC_NUM_ENTRY_TYPE: fieldBuilder.buildEnumField(
          'MskFADocNumEntryType',
          LtmEntryType,
          true
        ),
        /**
         * Static representation of the {@link mskProjPosMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_PROJ_POS_MASK: fieldBuilder.buildEdmTypeField(
          'MskProjPOSMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mskCustDocNumLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_CUST_DOC_NUM_LENGTH: fieldBuilder.buildEdmTypeField(
          'MskCustDocNumLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mskFaposLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_FAPOS_LENGTH: fieldBuilder.buildEdmTypeField(
          'MskFAPOSLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mskProjDocNumAssignType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_PROJ_DOC_NUM_ASSIGN_TYPE: fieldBuilder.buildEnumField(
          'MskProjDocNumAssignType',
          LtmAssignType,
          true
        ),
        /**
         * Static representation of the {@link mskBankDocNumAssignType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_BANK_DOC_NUM_ASSIGN_TYPE: fieldBuilder.buildEnumField(
          'MskBankDocNumAssignType',
          LtmAssignType,
          true
        ),
        /**
         * Static representation of the {@link mskInvPosEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_INV_POS_ENABLED: fieldBuilder.buildEnumField(
          'MskInvPOSEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskFaposMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_FAPOS_MANDATORY: fieldBuilder.buildEnumField(
          'MskFAPOSMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskProjPosMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_PROJ_POS_MANDATORY: fieldBuilder.buildEnumField(
          'MskProjPOSMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskFaposEntryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_FAPOS_ENTRY_TYPE: fieldBuilder.buildEnumField(
          'MskFAPOSEntryType',
          LtmEntryType,
          true
        ),
        /**
         * Static representation of the {@link mskProjPosEntryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_PROJ_POS_ENTRY_TYPE: fieldBuilder.buildEnumField(
          'MskProjPOSEntryType',
          LtmEntryType,
          true
        ),
        /**
         * Static representation of the {@link mskInvDocNumLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_INV_DOC_NUM_LENGTH: fieldBuilder.buildEdmTypeField(
          'MskInvDocNumLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mskGlDocNumLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_GL_DOC_NUM_LENGTH: fieldBuilder.buildEdmTypeField(
          'MskGLDocNumLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mskCustPosEntryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_CUST_POS_ENTRY_TYPE: fieldBuilder.buildEnumField(
          'MskCustPOSEntryType',
          LtmEntryType,
          true
        ),
        /**
         * Static representation of the {@link mskVendDocNumMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_VEND_DOC_NUM_MANDATORY: fieldBuilder.buildEnumField(
          'MskVendDocNumMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskCustDocNumMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_CUST_DOC_NUM_MASK: fieldBuilder.buildEdmTypeField(
          'MskCustDocNumMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mskVendPosEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_VEND_POS_ENABLED: fieldBuilder.buildEnumField(
          'MskVendPOSEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskGlDocNumMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_GL_DOC_NUM_MASK: fieldBuilder.buildEdmTypeField(
          'MskGLDocNumMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mskBankDocNumMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_BANK_DOC_NUM_MANDATORY: fieldBuilder.buildEnumField(
          'MskBankDocNumMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskVendPosMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_VEND_POS_MANDATORY: fieldBuilder.buildEnumField(
          'MskVendPOSMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskGlPreserveAssignedNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_GL_PRESERVE_ASSIGNED_NUM: fieldBuilder.buildEnumField(
          'MskGLPreserveAssignedNum',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskCustDocNumNoValidateMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_CUST_DOC_NUM_NO_VALIDATE_MASK: fieldBuilder.buildEnumField(
          'MskCustDocNumNoValidateMask',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskGlDocNumMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_GL_DOC_NUM_MANDATORY: fieldBuilder.buildEnumField(
          'MskGLDocNumMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskFaDocNumMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_FA_DOC_NUM_MANDATORY: fieldBuilder.buildEnumField(
          'MskFADocNumMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskProjDocNumMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_PROJ_DOC_NUM_MASK: fieldBuilder.buildEdmTypeField(
          'MskProjDocNumMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mskGlDocNumEntryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_GL_DOC_NUM_ENTRY_TYPE: fieldBuilder.buildEnumField(
          'MskGLDocNumEntryType',
          LtmEntryType,
          true
        ),
        /**
         * Static representation of the {@link mskFaPreserveAssignedNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_FA_PRESERVE_ASSIGNED_NUM: fieldBuilder.buildEnumField(
          'MskFAPreserveAssignedNum',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskVendDocNumLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_VEND_DOC_NUM_LENGTH: fieldBuilder.buildEdmTypeField(
          'MskVendDocNumLength',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmDocumentClassificationMasks)
      };
    }

    return this._schema;
  }
}
